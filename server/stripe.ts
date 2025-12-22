import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20',
});

export const createCheckoutSession = async (priceId: string, courseTier: string) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.VITE_APP_URL || 'http://localhost:5173'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.VITE_APP_URL || 'http://localhost:5173'}/`,
      metadata: {
        courseTier,
      },
    });

    return session;
  } catch (error) {
    console.error('Stripe error:', error);
    throw error;
  }
};

export const retrieveSession = async (sessionId: string) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return session;
  } catch (error) {
    console.error('Stripe error:', error);
    throw error;
  }
};

export const constructEvent = (body: string, sig: string, secret: string) => {
  try {
    return stripe.webhooks.constructEvent(body, sig, secret);
  } catch (error) {
    console.error('Webhook error:', error);
    throw error;
  }
};
