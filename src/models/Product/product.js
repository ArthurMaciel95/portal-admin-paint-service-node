const mongoose = require('mongoose');

const Product = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price:{
        type:Number,
        required:true
    },
    brand: {
        type:String,
        required:true
    },
    photo: {
      type: Buffer,
    },
    manufacturer:String
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

module.exports = mongoose.model('products', Product);
