function errorHandler(err, req, res, next) {
    console.log(err);
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error';

    return res.status(statusCode).json({
        success: false,
        message
    });
}

module.exports = errorHandler;