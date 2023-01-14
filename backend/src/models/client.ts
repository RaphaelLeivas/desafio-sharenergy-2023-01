import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: false },
    phone: { type: String, required: false },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model('Client', ClientSchema);
