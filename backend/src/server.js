const app = require('./app');
const appConfig = require('./config/app');
const Logger = require('./utils/logger');

const PORT = appConfig.port;

const server = app.listen(PORT, () => {
  Logger.success(`🚀 Server is running on port ${PORT}`);
  Logger.info(`Environment: ${appConfig.nodeEnv}`);
  Logger.info(`API Documentation: http://localhost:${PORT}/api/docs`);
  Logger.info(`Health Check: http://localhost:${PORT}/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  Logger.info('SIGTERM received, shutting down gracefully');
  server.close(() => {
    Logger.success('Process terminated');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  Logger.info('SIGINT received, shutting down gracefully');
  server.close(() => {
    Logger.success('Process terminated');
    process.exit(0);
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  Logger.error('Unhandled Promise Rejection:', err);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = server; 