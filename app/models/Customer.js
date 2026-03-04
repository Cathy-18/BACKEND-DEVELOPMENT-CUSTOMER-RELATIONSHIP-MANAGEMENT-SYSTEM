import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact_info: {
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
  },
  status: { type: String, enum: ['active', 'inactive', 'lead'], default: 'lead' },
});

export default mongoose.model('Customer', CustomerSchema);
