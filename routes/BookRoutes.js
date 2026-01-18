const express = require('express');
const router = express.Router();
const bookController = require('../controllers/BookController');

// Create Book
router.post('/', bookController.createBook);

// Get all Books
router.get('/', bookController.getAllBooks);

// Get Book by Id
router.get('/:id', bookController.getBookById);

// Update Book by Id
router.patch('/:id', bookController.updateBookById);

// delete book by id
router.delete('/:id', bookController.deleteBookById);

module.exports = router;
