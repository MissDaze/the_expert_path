# ExpertPath Backend Server

Backend server for the ExpertPath learning platform with Stripe payment integration.

## Features

- 💳 Stripe payment processing
- 🔒 Secure webhook handling
- 🚀 Express.js REST API
- 🔐 CORS configuration
- ⚡ Rate limiting
- 📝 TypeScript support

## Prerequisites

- Node.js 18+ installed
- pnpm package manager
- Stripe account (for API keys)

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
pnpm install
```

### 2. Get Stripe API Keys

1. Create a Stripe account at [https://stripe.com](https://stripe.com)
2. Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
3. Copy your **Publishable key** and **Secret key** (use test mode keys for development)

### 3. Configure Environment Variables

Copy the `.env.example` file to create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit the `.env` file and add your Stripe keys:

```env
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
PORT=3001
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

### 4. Set Up Webhook Endpoint (Optional for Local Development)

To test webhooks locally:

1. Install Stripe CLI: [https://stripe.com/docs/stripe-cli](https://stripe.com/docs/stripe-cli)
2. Login: `stripe login`
3. Forward webhooks to your local server:
   ```bash
   stripe listen --forward-to localhost:3001/api/webhook
   ```
4. Copy the webhook signing secret and add it to your `.env` file

## Running the Server

### Development Mode

```bash
# From the server directory
cd server
pnpm dev

# Or from the root directory
pnpm dev:server
```

The server will start on `http://localhost:3001` (or the port specified in `.env`)

### Production Build

```bash
# Build the server
pnpm build:server

# Start the production server
cd server
pnpm start
```

## API Endpoints

### POST /api/create-checkout-session

Creates a Stripe checkout session for course purchase.

**Request Body:**
```json
{
  "stage": "stage1" | "stage2" | "stage3"
}
```

**Response:**
```json
{
  "sessionId": "cs_test_...",
  "url": "https://checkout.stripe.com/..."
}
```

### GET /api/checkout/:sessionId

Verifies payment status after checkout.

**Response:**
```json
{
  "status": "paid",
  "customerEmail": "user@example.com",
  "courses": ["outlier-tips", "one-day-course", ...]
}
```

### POST /api/webhook

Handles Stripe webhook events (checkout completion, payment failures, etc.)

**Headers:**
- `stripe-signature`: Stripe webhook signature for verification

## Pricing Tiers

- **Stage 1** (2-Day Crash Course): $2.95
  - Courses: `outlier-tips`, `one-day-course`

- **Stage 2** (Assessment Playbook): $3.95
  - Courses: `outlier-tips`, `one-day-course`

- **Stage 3** (Complete Bundle): $79.95
  - Courses: `outlier-tips`, `one-day-course`, `git-expert`, `python-expert`, `english-expert`

## Testing Payments

### Test Mode

In test mode, use Stripe's test card numbers:

- **Successful payment:** `4242 4242 4242 4242`
- **Payment requires authentication:** `4000 0025 0000 3155`
- **Payment declined:** `4000 0000 0000 9995`

Use any future expiration date, any 3-digit CVC, and any 5-digit postal code.

### Testing the Payment Flow

1. Start both frontend and backend servers:
   ```bash
   pnpm dev:all
   ```

2. Open the frontend at `http://localhost:5173`
3. Click "Proceed to Checkout" for any pricing tier
4. Use a test card number on the Stripe checkout page
5. Complete the payment
6. You'll be redirected to the success page

## Deployment

### Environment Variables

Set the following environment variables in your production environment:

- `STRIPE_SECRET_KEY`: Your production Stripe secret key
- `STRIPE_PUBLISHABLE_KEY`: Your production Stripe publishable key
- `STRIPE_WEBHOOK_SECRET`: Webhook signing secret from Stripe dashboard
- `PORT`: Server port (default: 3001)
- `CLIENT_URL`: Your frontend URL (e.g., https://expertpath.com)
- `NODE_ENV`: Set to `production`

### Webhook Configuration

1. Go to [Stripe Webhooks](https://dashboard.stripe.com/webhooks)
2. Create a new webhook endpoint pointing to `https://your-domain.com/api/webhook`
3. Select events to listen to:
   - `checkout.session.completed`
   - `payment_intent.payment_failed`
4. Copy the webhook signing secret and add it to your environment variables

### Hosting Options

The server can be deployed to:

- **Vercel** (with Serverless Functions)
- **Heroku**
- **Railway**
- **DigitalOcean App Platform**
- **AWS (EC2/ECS/Lambda)**
- Any Node.js hosting service

## Security Features

- ✅ Stripe webhook signature verification
- ✅ CORS protection
- ✅ Rate limiting (10 requests per minute per IP)
- ✅ Environment variable validation
- ✅ Error handling and logging
- ✅ Input validation

## Troubleshooting

### "Stripe webhook signature verification failed"

- Make sure your `STRIPE_WEBHOOK_SECRET` is correctly set
- Ensure the webhook endpoint URL is correct
- Check that you're using the correct signing secret (test vs. production)

### "Failed to create checkout session"

- Verify your `STRIPE_SECRET_KEY` is valid
- Check server logs for detailed error messages
- Ensure the pricing configuration matches your requirements

### CORS errors

- Make sure `CLIENT_URL` in `.env` matches your frontend URL
- Check that the frontend is making requests to the correct backend URL

## Support

For issues or questions:
- Check the [Stripe Documentation](https://stripe.com/docs)
- Review server logs for error messages
- Contact support@expertpath.com

## License

MIT
