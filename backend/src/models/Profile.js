// This is a placeholder model structure
// In a real application, you'd use a database ORM like Sequelize or Mongoose

class Profile {
  constructor(data = {}) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.title = data.title || '';
    this.location = data.location || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.linkedin = data.linkedin || '';
    this.bio = data.bio || '';
    this.photoUrl = data.photoUrl || '';
    this.skills = data.skills || [];
    this.projects = data.projects || [];
    this.experience = data.experience || [];
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  static validate(data) {
    const errors = [];

    if (!data.name) errors.push('Name is required');
    if (!data.email) errors.push('Email is required');
    if (!data.title) errors.push('Title is required');

    return errors;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      title: this.title,
      location: this.location,
      email: this.email,
      phone: this.phone,
      linkedin: this.linkedin,
      bio: this.bio,
      photoUrl: this.photoUrl,
      skills: this.skills,
      projects: this.projects,
      experience: this.experience,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

module.exports = Profile; 