const ResponseHandler = require('../utils/response');
const asyncHandler = require('../middleware/asyncHandler');

class HealthController {
  static healthCheck = asyncHandler(async (req, res) => {
    const healthData = {
      status: 'OK',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0'
    };

    ResponseHandler.success(res, healthData, 'API is healthy');
  });

  static status = asyncHandler(async (req, res) => {
    const statusData = {
      server: 'running',
      database: 'connected', // In a real app, check actual DB connection
      timestamp: new Date().toISOString()
    };

    ResponseHandler.success(res, statusData, 'Server status');
  });
}

module.exports = HealthController; 