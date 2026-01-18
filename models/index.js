const sequelize = require("../config/database");

const User = require('./User');
const Book = require('./Book');
const Order = require('./Order');

// User (one to many) Order
User.hasMany(Order, {
    foreignKey: 'userId'
});
Order.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});




module.exports = {
    sequelize,
    User,
    Book,
    Order
};