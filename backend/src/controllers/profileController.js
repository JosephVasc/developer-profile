const ProfileService = require('../services/profileService');
const ResponseHandler = require('../utils/response');
const asyncHandler = require('../middleware/asyncHandler');

class ProfileController {
  static getProfile = asyncHandler(async (req, res) => {
    const profile = await ProfileService.getProfile();
    ResponseHandler.success(res, profile, 'Profile retrieved successfully');
  });

  static updateProfile = asyncHandler(async (req, res) => {
    const updateData = req.body;
    const updatedProfile = await ProfileService.updateProfile(updateData);
    ResponseHandler.success(res, updatedProfile, 'Profile updated successfully');
  });

  static getSkills = asyncHandler(async (req, res) => {
    const skills = await ProfileService.getSkills();
    ResponseHandler.success(res, skills, 'Skills retrieved successfully');
  });

  static getProjects = asyncHandler(async (req, res) => {
    const projects = await ProfileService.getProjects();
    ResponseHandler.success(res, projects, 'Projects retrieved successfully');
  });

  static getExperience = asyncHandler(async (req, res) => {
    const experience = await ProfileService.getExperience();
    ResponseHandler.success(res, experience, 'Experience retrieved successfully');
  });
}

module.exports = ProfileController; 