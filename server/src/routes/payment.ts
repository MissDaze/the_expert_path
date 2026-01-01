import express, { Request, Response } from 'express';
import Stripe from 'stripe';
import { config } from '../config/environment.js';
import { getPricingTier } from '../config/pricing.js';

const router = express.Router();
const stripe = new Stripe(config.stripe.secretKey, {
  apiVersion: '2023-10-16',
});

// Rate limiting map (simple in-memory rate limiter)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Cleanup old rate limit entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, limit] of rateLimitMap.entries()) {
    if (now > limit.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000);

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute window
    return true;
  }

  if (limit.count >= 10) {
    return false; // Exceeded rate limit
  }

  limit.count++;
  return true;
}

// POST /api/create-checkout-session
router.post('/create-checkout-session', async (req: Request, res: Response) => {
  try {
    const clientIp = req.ip || req.socket.remoteAddress || 'unknown';

    // Rate limiting
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    const { stage } = req.body;

    if (!stage) {
      return res.status(400).json({ error: 'Stage is required' });
    }

    const pricingTier = getPricingTier(stage);

    if (!pricingTier) {
      return res.status(400).json({ error: 'Invalid stage' });
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: pricingTier.name,
              description: pricingTier.description,
            },
            unit_amount: pricingTier.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${config.clientUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${config.clientUrl}/`,
      metadata: {
        stage: pricingTier.id,
        courses: JSON.stringify(pricingTier.courses),
      },
    });

    res.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// GET /api/checkout/:sessionId
router.get('/checkout/:sessionId', async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;

    if (!sessionId) {
      return res.status(400).json({ error: 'Session ID is required' });
    }

    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === 'paid') {
      // Parse courses safely
      let courses: string[] = [];
      try {
        courses = session.metadata?.courses ? JSON.parse(session.metadata.courses) : [];
      } catch (error) {
        console.error('Error parsing courses metadata:', error);
        courses = [];
      }
      
      res.json({
        status: 'paid',
        customerEmail: session.customer_details?.email,
        courses,
      });
    } else {
      res.json({
        status: session.payment_status,
      });
    }
  } catch (error) {
    console.error('Error retrieving checkout session:', error);
    res.status(500).json({ error: 'Failed to retrieve checkout session' });
  }
});

// POST /api/webhook
router.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  async (req: Request, res: Response) => {
    const sig = req.headers['stripe-signature'];

    if (!sig) {
      return res.status(400).send('Missing stripe-signature header');
    }

    let event: Stripe.Event;

    try {
      // Verify webhook signature
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        config.stripe.webhookSecret
      );
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return res.status(400).send(`Webhook Error: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('Payment successful:', {
          sessionId: session.id,
          customerEmail: session.customer_details?.email,
          amount: session.amount_total,
          courses: session.metadata?.courses,
        });
        
        // Here you would typically:
        // 1. Store the payment in your database
        // 2. Grant course access to the user
        // 3. Send confirmation email
        
        break;
      }
      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('Payment failed:', paymentIntent.id);
        break;
      }
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  }
);

export default router;
