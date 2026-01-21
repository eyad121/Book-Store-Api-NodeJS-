const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

// Create Order
router.post('/', authenticate,
    orderController.createOrder);

// Get order by Id
router.get('/:id', authenticate,
    orderController.getOrderById);

// Get all orders
router.get('/',
    authenticate,
    authorize(['admin']),
    orderController.getAllOrders);

// Update order by Id
router.patch('/:id',
    authenticate,
    orderController.updateOrderById);

// Delete Order By Id
router.delete('/:id', 
    authenticate,
    authorize(['admin']),
    orderController.deleteOrderById);

module.exports = router;