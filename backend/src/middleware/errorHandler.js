const Logger = require('../utils/logger');
const ResponseHandler = require('../utils/response');

const errorHandler = (err, req, res, next) => {
  Logger.error('Error occurred:', err);

  // Handle specific error types
  if (err.name === 'ValidationError') {
    return ResponseHandler.validationError(res, err.errors);
  }

  if (err.name === 'CastError') {
    return ResponseHandler.error(res, 'Invalid ID format', 400);
  }

  if (err.code === 11000) {
    return ResponseHandler.error(res, 'Duplicate field value', 400);
  }

  if (err.name === 'JsonWebTokenError') {
    return ResponseHandler.unauthorized(res, 'Invalid token');
  }

  if (err.name === 'TokenExpiredError') {
    return ResponseHandler.unauthorized(res, 'Token expired');
  }

  // Default error
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';

  ResponseHandler.error(res, message, statusCode);
};

module.exports = errorHandler; 