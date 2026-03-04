import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri || uri.includes('localhost')) {
      console.warn('Warning: MONGODB_URI is not set or is pointing to localhost. Please provide a valid MongoDB connection string (e.g., MongoDB Atlas) in your environment variables.');
    }
    const conn = await mongoose.connect(uri || 'mongodb://localhost:27017/crm_db');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    console.error('Please ensure your MONGODB_URI is correct and your IP address is whitelisted in your database provider (e.g., MongoDB Atlas).');
    process.exit(1);
  }
};

export default connectDB;
