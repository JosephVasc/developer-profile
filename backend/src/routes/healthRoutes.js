const express = require('express');
const HealthController = require('../controllers/healthController');

const router = express.Router();

// GET /health - Health check
router.get('/', HealthController.healthCheck);

// GET /health/status - Detailed status
router.get('/status', HealthController.status);

module.exports = router; 