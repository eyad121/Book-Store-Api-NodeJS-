const Book = require('../models/Book');

// Create Book
const createBook = async(bookData) => {
    return await Book.create(bookData);
}

// Get all Books
const getAllBooks = async( options = {} ) => {
    return await Book.findAll(options);
}

// Get Book by Id
const getBookById = async(id, options = {}) => {
    return await Book.findByPk(id, options);
}

// Update Book by Id
const updateBookById = async(id, updates) => {
    const book = await Book.findByPk(id);
    if(!book){ return null; }
    await book.update(updates);
    return book;
}

// delete book by id
const deleteBookById = async(id) => {
    const book = await Book.findByPk(id);
    if(!book) { return null; }
    await book.destroy();
    return true;
}

module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBookById,
    deleteBookById
}