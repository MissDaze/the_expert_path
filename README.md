# ExpertPath - Outlier Expert Training Platform

Master Git, Python, and English to pass Outlier.ai assessments and unlock expert-tier rates.

## 🚀 Features

- **3 Complete Courses**: Git Expert Mastery, Python Expert Mastery, English Expert Mastery
- **45 Comprehensive Modules**: 15 modules per course with detailed content
- **Interactive Learning**: Exercises, projects, and answer keys
- **Payment Integration**: Secure Stripe payment processing
- **Progress Tracking**: Track your learning journey
- **Lifetime Access**: One-time payment, lifetime learning

## 🛠 Tech Stack

**Frontend:**
- React 19 with TypeScript
- Vite for blazing-fast builds
- Tailwind CSS for styling
- Wouter for routing
- Radix UI components

**Backend:**
- Express.js with TypeScript
- Stripe for payment processing
- PostgreSQL database (optional)
- JWT authentication

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/MissDaze/the_expert_path.git
cd the_expert_path
```

2. Install dependencies:
```bash
pnpm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Add your environment variables:
```
# Backend
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
DATABASE_URL=your_database_url (optional)
JWT_SECRET=your_jwt_secret

# Frontend (VITE_ prefix required for Vite)
VITE_API_URL=http://localhost:3000
```

5. Run development server:
```bash
pnpm dev
```

6. Run backend API:
```bash
pnpm dev:server
```

## 🚀 Deployment

### Vercel (Frontend)
```bash
vercel deploy
```

### Railway/Render (Backend)
Connect your repository and deploy the server folder.

## 📚 Course Structure

### Git Expert Mastery (15 days)
- Day 1-5: Git fundamentals, commits, branches
- Day 6-10: Advanced workflows, collaboration
- Day 11-15: Professional practices, assessment prep

### Python Expert Mastery (15 days)
- Day 1-5: Python basics, data structures
- Day 6-10: OOP, file handling, modules
- Day 11-15: Advanced concepts, best practices

### English Expert Mastery (15 days)
- Day 1-5: Grammar, writing fundamentals
- Day 6-10: Professional communication
- Day 11-15: Technical writing, documentation

## 🔒 Security

- Secure payment processing via Stripe
- JWT-based authentication
- Environment variables for sensitive data
- HTTPS in production

## 📄 License

MIT License - see LICENSE file

## 🤝 Support

Email: support@expertpath.com
