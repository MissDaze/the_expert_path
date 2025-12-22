// server/index.ts
import express2 from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

// server/routes.ts
import express from "express";

// server/stripe.ts
import Stripe from "stripe";
var stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-11-20"
});
var createCheckoutSession = async (priceId, courseTier) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1
        }
      ],
      mode: "payment",
      success_url: `${process.env.VITE_APP_URL || "http://localhost:5173"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.VITE_APP_URL || "http://localhost:5173"}/`,
      metadata: {
        courseTier
      }
    });
    return session;
  } catch (error) {
    console.error("Stripe error:", error);
    throw error;
  }
};
var retrieveSession = async (sessionId) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return session;
  } catch (error) {
    console.error("Stripe error:", error);
    throw error;
  }
};

// server/routes.ts
var router = express.Router();
var STRIPE_PRICES = {
  "outlier-tips": process.env.STRIPE_PRICE_OUTLIER_TIPS || "price_outlier_tips",
  "one-day-course": process.env.STRIPE_PRICE_ONE_DAY || "price_one_day",
  "git-expert": process.env.STRIPE_PRICE_GIT || "price_git",
  "python-expert": process.env.STRIPE_PRICE_PYTHON || "price_python",
  "english-expert": process.env.STRIPE_PRICE_ENGLISH || "price_english",
  "bundle": process.env.STRIPE_PRICE_BUNDLE || "price_bundle"
};
router.post("/api/checkout", async (req, res) => {
  try {
    const { courseId, tier } = req.body;
    if (!courseId || !STRIPE_PRICES[courseId]) {
      return res.status(400).json({ error: "Invalid course ID" });
    }
    const priceId = STRIPE_PRICES[courseId];
    const session = await createCheckoutSession(priceId, tier || "standard");
    res.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});
router.get("/api/checkout/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const session = await retrieveSession(sessionId);
    res.json({
      status: session.payment_status,
      customerId: session.customer,
      metadata: session.metadata
    });
  } catch (error) {
    console.error("Session retrieval error:", error);
    res.status(500).json({ error: "Failed to retrieve session" });
  }
});
router.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});
var routes_default = router;

// server/index.ts
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
async function startServer() {
  const app = express2();
  const server = createServer(app);
  const staticPath = process.env.NODE_ENV === "production" ? path.resolve(__dirname, "public") : path.resolve(__dirname, "..", "dist", "public");
  app.use(express2.json());
  app.use(express2.urlencoded({ extended: true }));
  app.use(routes_default);
  app.use(express2.static(staticPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });
  const port = process.env.PORT || 3e3;
  if (process.env.STRIPE_SECRET_KEY) {
    console.log("\u2713 Stripe configured");
  } else {
    console.warn("\u26A0 Stripe not configured");
  }
  server.listen(port, () => {
    console.log(`
\u{1F680} ExpertPath Server Running`);
    console.log(`\u{1F4CD} URL: http://localhost:${port}/`);
    console.log(`\u{1F4B3} Stripe: ${process.env.STRIPE_SECRET_KEY ? "Configured" : "Not configured"}
`);
  });
}
startServer().catch(console.error);
