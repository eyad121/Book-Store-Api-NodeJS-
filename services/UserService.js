const User = require('../models/User');

// create user
const createUser = async(userData) => {
    return await User.create(userData);
};

// get user by id
const getUserById = async(id, options = {}) => {
    return await User.findByPk(id, options);
};

// Get all users
const getAllUsers = async(options = {}) => {
    return User.findAll(options);
};

// update user by id
const updateUserById = async(id, updateData) => {
    const user = await User.findByPk(id);
    if(!user) { return null; };
    await user.update(updateData);
    return user;
}

// delete user by id
const deleteUserById = async(id) => {
    const user = await User.findByPk(id);
    if(!user) { return null; };
    await user.destroy();
    return true;
}

module.exports = {
    createUser,
    getUserById,
    getAllUsers,
    updateUserById,
    deleteUserById
}