const { Router } = require('express');
const {
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/order.controller.js');

const router = Router();

router.route('/').post(createOrder);
router.route('/:orderId').get(getOrder);
router.route('/:orderId').put(updateOrder);
router.route('/:orderId').delete(deleteOrder);

module.exports = router;
