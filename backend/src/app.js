const express = require('express');
const cors = require('cors');
const path = require('path');
const appConfig = require('./config/app');
const errorHandler = require('./middleware/errorHandler');
const Logger = require('./utils/logger');

// Import routes
const profileRoutes = require('./routes/profileRoutes');
const healthRoutes = require('./routes/healthRoutes');

const app = express();

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// CORS configuration
app.use(cors(appConfig.cors));

// Request logging middleware
app.use((req, res, next) => {
  Logger.info(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
app.use('/api/profile', profileRoutes);
app.use('/health', healthRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Developer Profile API',
    version: '1.0.0',
    endpoints: {
      profile: '/api/profile',
      health: '/health',
      docs: '/api/docs'
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

module.exports = app; 