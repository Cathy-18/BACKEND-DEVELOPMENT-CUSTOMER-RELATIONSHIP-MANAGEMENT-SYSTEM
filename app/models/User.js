import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
});

export default mongoose.model('User', UserSchema);
