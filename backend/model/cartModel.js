// cartModel.js

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to your User model
    required: true
  },
  courses: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course', // Reference to your Course model
        required: true
      },
      quantity: {
        type: Number,
        default: 1,
        required: true
      }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);
