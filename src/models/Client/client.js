const mongoose = require('mongoose');

const Client = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'pending',
    },
    payment_method: {
      type: String,
      required: true,
    },
    company: String,
    photo: {
      type: Buffer,
    },
    adress: {
      cep: String,
      district: String,
      additional_infomation: String,
      city: String,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

module.exports = mongoose.model('users', Client);
