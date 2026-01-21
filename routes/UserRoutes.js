const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

// create user
router.post('/', userController.createUser);

// get user by id
router.get('/:id', 
    authenticate,
    userController.getUserById);

// Get all users
router.get('/',
    authenticate,
    userController.getAllUsers);

// update user by id
router.patch('/:id', 
    authenticate,
    userController.updateUserById);

// delete user by id
router.delete('/:id',
    authenticate,
    authorize(['admin']),
    userController.deleteUserById);

module.exports = router;

