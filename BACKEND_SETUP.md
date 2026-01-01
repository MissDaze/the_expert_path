# Backend Setup Instructions

## Installing Backend Dependencies

The backend requires additional dependencies that need to be installed. Run one of the following commands:

### Using pnpm (recommended):
```bash
pnpm install
```

### Using npm:
```bash
npm install express@^4.19.2 cors@^2.8.5 dotenv@^16.4.7 jsonwebtoken@^9.0.2
npm install --save-dev @types/cors@^2.8.17 @types/jsonwebtoken@^9.0.7
```

## Running the Backend

After installing dependencies, start the backend server:

```bash
pnpm dev:server
# or
npm run dev:server
```

The server will run on port 3000 by default (configurable via PORT environment variable).

## Environment Variables

Make sure to create a `.env` file based on `.env.example` with your Stripe keys and other configuration.

## Notes

- The backend uses Express.js with TypeScript
- Stripe API version: 2023-10-16
- CORS is configured to allow requests from the frontend (localhost:5173 by default)
