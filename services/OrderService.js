const Order = require('../models/Order');

// Create Order
const createOrder = async(orderData) => {
    return await Order.create(orderData);
}

// Get order by Id
const getOrderById = async(id, options = {}) => {
    return await Order.findByPk(id, options);
}   

// Get all orders
const getAllOrders = async(options = {}) => {
    return await Order.findAll(options);
}

// Update order by Id
const updateOrderById = async(id, updates) => {
    const order = await Order.findByPk(id);
    if(!order) {
        return null;
    }
    await order.update(updates);
    return order;
}

// Delete Order By Id
const deleteOrderById = async(id) => {
    const order = await Order.findByPk(id);
    if(!order) {
        return null;
    }
    await order.destroy();
    return true;
}

module.exports = {
    createOrder,
    getOrderById,
    getAllOrders,
    updateOrderById,
    deleteOrderById
}