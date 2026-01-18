const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');

// create user
router.post('/', userController.createUser);

// get user by id
router.get('/:id', userController.getUserById);

// Get all users
router.get('/', userController.getAllUsers);

// update user by id
router.patch('/:id', userController.updateUserById);

// delete user by id
router.delete('/:id', userController.deleteUserById);

module.exports = router;

