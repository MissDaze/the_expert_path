import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import checkoutRoutes from './routes/checkout';
import coursesRoutes from './routes/courses';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173'
}));
app.use(express.json());

// Routes
app.use('/api/checkout', checkoutRoutes);
app.use('/api/courses', coursesRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
