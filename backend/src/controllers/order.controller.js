const { ApiError } = require('../utils/ApiError.js');
const { ApiResponse } = require('../utils/ApiResponse.js');
const { asyncHandler } = require('../utils/asyncHandler.js');
const { Order } = require('../models/order.model.js');

const createOrder = asyncHandler(async (req, res) => {
  const { userId, productIds, totalAmount } = req.body;

  if (!userId || !productIds || !totalAmount) {
    throw new ApiError(400, 'All fields are required');
  }

  const newOrder = await Order.create({
    userId,
    productIds,
    totalAmount,
  });

  if (!newOrder) {
    throw new ApiError(500, 'Order creation failed');
  }

  return res
    .status(201)
    .json(new ApiResponse(201, newOrder, 'Order created successfully'));
});

const getOrder = asyncHandler(async (req, res) => {
  const { orderId } = req.params;

  if (!orderId) {
    throw new ApiError(404, 'Order not found !');
  }

  const order = await Order.findById(orderId);

  if (!order) {
    throw new ApiError(404, 'Order not found !');
  }

  return res
    .status(200)
    .json(new ApiResponse(200, order, 'Order fetched successfully'));
});

const updateOrder = asyncHandler(async (req, res) => {
  const { orderId } = req.params;
  const { userId, productIds, totalAmount } = req.body;

  if (!orderId) {
    throw new ApiError(404, 'Order not found !');
  }

  const updatedOrder = await Order.findByIdAndUpdate(
    orderId,
    { userId, productIds, totalAmount },
    { new: true },
  );

  if (!updatedOrder) {
    throw new ApiError(404, 'Order not found !');
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedOrder, 'Order updated successfully'));
});

const deleteOrder = asyncHandler(async (req, res) => {
  const { orderId } = req.params;

  if (!orderId) {
    throw new ApiError(404, 'Order not found !');
  }

  const deletedOrder = await Order.findByIdAndDelete(orderId);

  if (!deletedOrder) {
    throw new ApiError(404, 'Order not found !');
  }

  return res
    .status(200)
    .json(new ApiResponse(200, deletedOrder, 'Order deleted successfully'));
});

module.exports = {
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
};
