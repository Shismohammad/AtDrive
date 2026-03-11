const { ApiError } = require('../utils/ApiError.js');
const { ApiResponse } = require('../utils/ApiResponse.js');
const { asyncHandler } = require('../utils/asyncHandler.js');
const { Product } = require('../models/product.model.js');

const createProduct = asyncHandler(async (req, res) => {
  const { name, price, description } = req.body;

  if (name === '' || price === '' || description === '') {
    throw new ApiError(400, 'All field are Required');
  }

  const existedProduct = await Product.findOne({ name: name });

  if (existedProduct != null) {
    throw new ApiError(409, 'Product already exists');
  }

  const newProduct = await Product.create({
    name,
    price,
    description,
  });

  if (!newProduct) {
    throw new ApiError(500, 'Product creation failed');
  }

  return res
    .status(201)
    .json(new ApiResponse(201, newProduct, 'Product created successfully'));
});

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  return res
    .status(200)
    .json(new ApiResponse(200, products, 'Products fetched successfully'));
});

const getProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  if (!productId) {
    throw new ApiError(404, 'Product not found !');
  }

  const product = await Product.findById(productId);

  if (!product) {
    throw new ApiError(404, 'Product not found !');
  }

  return res
    .status(200)
    .json(new ApiResponse(200, product, 'Product fetched successfully'));
});

const updateProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const { name, price, description } = req.body;

  if (!productId) {
    throw new ApiError(404, 'Product not found !');
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    { name, price, description },
    { new: true },
  );

  if (!updatedProduct) {
    throw new ApiError(404, 'Product not found !');
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedProduct, 'Product updated successfully'));
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  if (!productId) {
    throw new ApiError(404, 'Product not found !');
  }

  const deletedProduct = await Product.findByIdAndDelete(productId);

  if (!deletedProduct) {
    throw new ApiError(404, 'Product not found !');
  }

  return res
    .status(200)
    .json(new ApiResponse(200, deletedProduct, 'Product deleted successfully'));
});

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
