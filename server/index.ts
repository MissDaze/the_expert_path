import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API routes
  app.use(routes);

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  // Log Stripe configuration
  if (process.env.STRIPE_SECRET_KEY) {
    console.log('✓ Stripe configured');
  } else {
    console.warn('⚠ Stripe not configured');
  }

  server.listen(port, () => {
    console.log(`\n🚀 ExpertPath Server Running`);
    console.log(`📍 URL: http://localhost:${port}/`);
    console.log(`💳 Stripe: ${process.env.STRIPE_SECRET_KEY ? 'Configured' : 'Not configured'}\n`);
  });
}

startServer().catch(console.error);
