import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { existsSync } from 'node:fs';
import { config } from './config/environment.js';
import paymentRoutes from './routes/payment.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
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
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api', paymentRoutes);

// Serve the built client in production with SPA fallback.
const clientDist = join(__dirname, '..', '..', 'dist');
if (existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(join(clientDist, 'index.html'));
  });
}

// Error handling middleware
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
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
