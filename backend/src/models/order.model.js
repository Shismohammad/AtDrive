const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      trim: true,
    },
    productIds: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

const Order = mongoose.model('order', OrderSchema);
module.exports = { Order };
