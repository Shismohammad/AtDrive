const { Router } = require('express');
const {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller.js');

const router = Router();

router.route('/').post(createProduct);
router.route('/').get(getAllProducts);
router.route('/:productId').get(getProduct);
router.route('/:productId').put(updateProduct);
router.route('/:productId').delete(deleteProduct);

module.exports = router;
