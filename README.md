# ExpertPath

A paid online course platform. Learners work through course modules and quizzes, track progress on a dashboard, and unlock content via a Stripe-powered paywall. Includes certificate generation on course completion.

## Features

- Course dashboard with per-module progress tracking
- Quizzes with scoring
- Stripe Checkout paywall for course access
- Completion certificates
- Standard legal pages (terms, privacy, refund, disclaimer)

## Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, Radix UI
- **Backend**: Node.js, Express, Stripe

## Setup

Client:
1. Install dependencies:
   ```
   pnpm install
   ```
2. Copy `.env.example` to `.env` and configure required values.
3. Run the client in development:
   ```
   pnpm dev
   ```
4. Build for production:
   ```
   pnpm build
   ```

Server:
1. From the `server/` directory, install dependencies and run:
   ```
   npm install
   npm run dev
   ```
2. Configure Stripe keys and other required environment variables for the server.

Or run both client and server together from the project root with:
```
pnpm dev:all
```
