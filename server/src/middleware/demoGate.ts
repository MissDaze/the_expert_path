import { Request, Response, NextFunction } from 'express';

// Gates demo-sensitive routes behind a shared access code so anonymous
// visitors can't spam checkout-session creation against the live Stripe
// account. Fails closed: if DEMO_ACCESS_CODE isn't set, requests are
// rejected rather than silently left open.
export function demoGate(req: Request, res: Response, next: NextFunction) {
  const code = process.env.DEMO_ACCESS_CODE;
  if (code && req.headers['x-demo-code'] === code) return next();
  return res.status(401).json({ error: 'Demo access code required.', gated: true });
}
