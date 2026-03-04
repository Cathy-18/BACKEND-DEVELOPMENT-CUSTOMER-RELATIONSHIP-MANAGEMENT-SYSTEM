import mongoose from 'mongoose';

const CaseSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  assigned_to: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  status: { type: String, enum: ['open', 'in-progress', 'closed'], default: 'open' },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model('Case', CaseSchema);
