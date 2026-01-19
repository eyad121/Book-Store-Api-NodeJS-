const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');

// Create Order
router.post('/', orderController.createOrder);

// Get order by Id
router.get('/:id', orderController.getOrderById);

// Get all orders
router.get('/', orderController.getAllOrders);

// Update order by Id
router.patch('/:id', orderController.updateOrderById);

// Delete Order By Id
router.delete('/:id', orderController.deleteOrderById);

module.exports = router;