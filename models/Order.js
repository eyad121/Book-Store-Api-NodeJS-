const { DataTypes } = require("sequelize");
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0
        }
    },
    status: {
        type: DataTypes.ENUM('pending', 'delivered'),
        allowNull: false,
        defaultValue: 'pending'
    },
    orderItems: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Order;