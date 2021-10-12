const mongoose = require('mongoose');

const Client = new mongoose.Schema(
  {
    uuid: {
      type: String,
      required: true,
    },
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
    company: {
      type: String,
    },
    photo: {
      type: Buffer,
    },
    adress: {
      cep: {
        type: String,
      },
      district: {
        type: String,
      },
      additional_infomation: {
        type: String,
      },
      city: {
        type: String,
      },
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

module.exports = mongoose.model('users', Client);