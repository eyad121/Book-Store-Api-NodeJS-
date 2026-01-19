const orderService = require('../services/OrderService');
const User = require('../models/User');

// Create Order
const createOrder = async(req, res, next) => {
    try {
        const { userId, totalAmount, status, orderItems } = req.body;
        const order = await orderService.createOrder({
            userId,
            totalAmount,
            status,
            orderItems
        });

        return res.status(201).json({
            success: true,
            data: order
        });

    } catch(error) {
        next(error);
    }
}

// Get order by Id
const getOrderById = async(req, res, next) => {
    try {
        const id = req.params.id;
        const order = await orderService.getOrderById(id, {
            include: [
                {
                    model: User,
                    attributes: ['id', 'name', 'email']
                }
            ]
        });
        if(!order) {
            return res.status(404).json({
                success: false,
                msg: 'Order Not Found'
            });
        }

        return res.status(200).json({
            success: true, 
            data: order
        });

    } catch(error) {
        next(error);
    }
}

// Get all orders
const getAllOrders = async(req, res, next) => {
    try {
        const orders = await orderService.getAllOrders({
            include: [
                {
                    model: User,
                    attributes: ['id', 'name', 'email']
                }
            ] 
        });

        return res.status(200).json({
            success: true,
            data: orders
        });

    } catch(error) {
        next(error);
    }
}

// Update order by Id
const updateOrderById = async(req, res, next) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const updatedOrder = await orderService.updateOrderById(id, updates);

        if(!updatedOrder) {
            return res.status(404).json({
                success: false,
                msg: 'Order Not Found'
            });
            }

            return res.status(200).json({
                success: true,
                data: updatedOrder 
            });
        
    } catch(error) {
        next(error);
    }
}

// Delete Order By Id
const deleteOrderById = async(req, res, next) => {
    try {
        const id = req.params.id;
        const deleted = await orderService.deleteOrderById(id);

        if(!deleted) {
            return res.status(404).json({
                success: false,
                msg: 'Order Not Found'
            });
        }
        
        return res.status(200).json({
            success: true,
            msg: 'Order is Deleted Successfully'
        })
    } catch(error) {
        next(error);
    }
}

module.exports = {
    createOrder,
    getOrderById,
    getAllOrders,
    updateOrderById,
    deleteOrderById
}