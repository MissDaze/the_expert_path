import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from './config/environment.js';
import paymentRoutes from './routes/payment.js';

const app = express();

// CORS configuration
app.use(cors({
  origin: config.clientUrl,
  credentials: true,
}));

// Body parser middleware
// Note: /api/webhook uses raw body, so it's handled in the route itself
app.use((req, res, next) => {
  if (req.path === '/api/webhook') {
    next();
  } else {
    bodyParser.json()(req, res, next);
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api', paymentRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(config.port, () => {
  console.log(`🚀 Server running on port ${config.port}`);
  console.log(`📍 Environment: ${config.nodeEnv}`);
  console.log(`🌐 Client URL: ${config.clientUrl}`);
  console.log(`💳 Stripe configured: ${!!config.stripe.secretKey}`);
});
