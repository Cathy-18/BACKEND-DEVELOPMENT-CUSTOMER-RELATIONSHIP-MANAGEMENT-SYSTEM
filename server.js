import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './app/routes/authRoutes.js';
import customerRoutes from './app/routes/customerRoutes.js';
import caseRoutes from './app/routes/caseRoutes.js';
import { errorHandler } from './app/middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/cases', caseRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('CRM API is running...');
});

// Error Handling
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
