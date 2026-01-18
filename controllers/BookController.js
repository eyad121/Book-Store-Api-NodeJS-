const bookService = require('../services/BookService');

// Create Book
const createBook = async(req, res, next) => {
    try {
    const { title, author, description, price, stock, category } = req.body;
    const book = await bookService.createBook({
        title,
        author,
        description,
        price,
        stock,
        category
    });

    return res.status(201).json({
        success: true,
        data: book
    });

    } catch(error) {
        next(error);
    }
}

// Get all Books
const getAllBooks = async(req, res, next) => {
    try {
    const books = await bookService.getAllBooks();

    return res.status(200).json({
        success: true,
        data: books
    });

    } catch(error) {
        next(error)
    }
}

// Get Book by Id
const getBookById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const book = await bookService.getBookById(id);
        if(!book) {
            return res.status(404).json({
                success: false,
                msg: 'Book not found'
            });
        }
    
        return res.status(200).json({
            success: true,
            data: book
        });

    } catch(error) {
            next(error)
        }
}

// Update Book by Id
const updateBookById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const updates = { ...req.body }
        const book = await bookService.updateBookById(id, updates);
        if(!book) {
            return res.status(404).json({
                success: false,
                msg: 'Book not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: book
        });

    } catch(error) {
        next(error)
    }
}

// delete book by id
const deleteBookById = async(req, res, next) => {
    try {
        const {id} = req.params;
        const deleted = await bookService.deleteBookById(id);
        if(!deleted) {
            return res.status(404).json({
                success: false,
                msg: 'Book not Found'
            });
        }
        return res.status(200).json({
            success: true,
            msg: 'Book deleted successefuly'
        });

    } catch(error) {
        next(error)
    }
}

module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBookById,
    deleteBookById
}