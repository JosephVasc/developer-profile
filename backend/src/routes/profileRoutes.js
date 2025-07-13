const express = require('express');
const ProfileController = require('../controllers/profileController');

const router = express.Router();

// GET /api/profile - Get full profile
router.get('/', ProfileController.getProfile);

// PUT /api/profile - Update profile
router.put('/', ProfileController.updateProfile);

// GET /api/profile/skills - Get skills
router.get('/skills', ProfileController.getSkills);

// GET /api/profile/projects - Get projects
router.get('/projects', ProfileController.getProjects);

// GET /api/profile/experience - Get experience
router.get('/experience', ProfileController.getExperience);

module.exports = router; 