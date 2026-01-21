const express = require('express');
const router = express.Router();
const bookController = require('../controllers/BookController');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

// Create Book
router.post('/', 
    authenticate,
    authorize(['admin']),
    bookController.createBook);

// Get all Books
router.get('/', bookController.getAllBooks);

// Get Book by Id
router.get('/:id', bookController.getBookById);

// Update Book by Id
router.patch('/:id',
    authenticate,
    authorize(['admin']),
    bookController.updateBookById);

// delete book by id
router.delete('/:id',
    authenticate,
    authorize(['admin']),
    bookController.deleteBookById);

module.exports = router;
