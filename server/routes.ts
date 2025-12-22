import express from 'express';
import { createCheckoutSession, retrieveSession } from './stripe';

const router = express.Router();

// Product IDs - These should be created in your Stripe dashboard
const STRIPE_PRICES = {
  'outlier-tips': process.env.STRIPE_PRICE_OUTLIER_TIPS || 'price_outlier_tips',
  'one-day-course': process.env.STRIPE_PRICE_ONE_DAY || 'price_one_day',
  'git-expert': process.env.STRIPE_PRICE_GIT || 'price_git',
  'python-expert': process.env.STRIPE_PRICE_PYTHON || 'price_python',
  'english-expert': process.env.STRIPE_PRICE_ENGLISH || 'price_english',
  'bundle': process.env.STRIPE_PRICE_BUNDLE || 'price_bundle',
};

// Create checkout session
router.post('/api/checkout', async (req, res) => {
  try {
    const { courseId, tier } = req.body;

    if (!courseId || !STRIPE_PRICES[courseId as keyof typeof STRIPE_PRICES]) {
      return res.status(400).json({ error: 'Invalid course ID' });
    }

    const priceId = STRIPE_PRICES[courseId as keyof typeof STRIPE_PRICES];
    const session = await createCheckoutSession(priceId, tier || 'standard');

    res.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// Retrieve session status
router.get('/api/checkout/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const session = await retrieveSession(sessionId);

    res.json({
      status: session.payment_status,
      customerId: session.customer,
      metadata: session.metadata,
    });
  } catch (error) {
    console.error('Session retrieval error:', error);
    res.status(500).json({ error: 'Failed to retrieve session' });
  }
});

// Health check
router.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

export default router;
