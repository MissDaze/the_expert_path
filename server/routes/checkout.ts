import express from 'express';
import Stripe from 'stripe';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

// Create checkout session
router.post('/create-session', async (_req, res) => {
  try {

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'ExpertPath - Complete Bundle',
              description: 'Access all 3 expert courses with lifetime access',
            },
            unit_amount: 7995, // $79.95
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/`,
    });

    res.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Verify payment
router.get('/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    res.json({
      status: session.payment_status,
      customerEmail: session.customer_details?.email,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Webhook handler
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      // Handle successful payment (save to database, send email, etc.)
      console.log('Payment successful:', session.id);
    }

    res.json({ received: true });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
