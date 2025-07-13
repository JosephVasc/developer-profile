const Profile = require('../models/Profile');
const Logger = require('../utils/logger');

// Mock data - in a real app, this would come from a database
const mockProfileData = {
  name: "Joseph Vasconcelos",
  title: "Full Stack Engineer",
  location: "Plymouth, MA",
  email: "joseph.vasconcelos97@gmail.com",
  phone: "(781)-243-1009",
  linkedin: "linkedin.com/in/joseph-vasconcelos",
  bio: "Full Stack Engineer with expertise in Java, TypeScript, Python, and GoLang. Passionate about building scalable applications and integrating AI solutions. Experienced in developing microservices, managing cloud infrastructure, and delivering innovative solutions for global clients.",
  photoUrl: "/profile.jpg",
  skills: [
    {
      category: "Programming Languages",
      items: ["Java", "TypeScript", "Python", "GoLang", "SQL", "HTML & CSS"]
    },
    {
      category: "Libraries and Frameworks",
      items: ["Spring", "Next.js", "React", "Angular", "Node.js", "Express.js"]
    },
    {
      category: "Database Skills",
      items: ["Hibernate", "MongoDB", "Redis", "Firebase", "Postgres", "AWS Redshift", "DynamoDB"]
    },
    {
      category: "Artificial Intelligence",
      items: ["Azure Document Intelligence", "Prompt Engineering", "AI Workflows"]
    },
    {
      category: "DevOps & Automation",
      items: ["Azure DevOps", "Docker", "Terraform", "AWS", "Prometheus", "Datadog", "Camunda", "Ansible"]
    }
  ],
  projects: [
    {
      id: "1",
      title: "Integration Platform",
      description: "Built an integration platform using Java and Angular to support customer data integrations with applications like Procore, HubSpot, Salesforce.",
      imageUrl: "/projects/integration-platform.jpg",
      technologies: ["Java", "Angular", "OpenSearch", "REST APIs"],
      featured: true
    },
    {
      id: "2",
      title: "Document Center with AI",
      description: "Developed document center with Java/Angular for managing and sharing critical finance and contractor safety files.",
      imageUrl: "/projects/document-center.jpg",
      technologies: ["Java", "Angular", "Python", "RAG API", "Document Processing"],
      featured: true
    }
  ],
  experience: [
    {
      id: "1",
      company: "Highwire",
      title: "Full Stack Engineer",
      location: "Burlington, MA",
      startDate: "August 2024",
      endDate: "Present",
      current: true,
      description: [
        "Develop backend schema and frontend UI/UX to deliver new features on a Java/Spring + Hibernate/Postgres backend and Angular 19 Frontend."
      ],
      technologies: ["Java", "Spring", "Angular", "Postgres", "Python", "AWS", "Docker", "Chart.js"]
    }
  ]
};

class ProfileService {
  static async getProfile() {
    try {
      Logger.info('Fetching profile data');
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const profile = new Profile(mockProfileData);
      return profile;
    } catch (error) {
      Logger.error('Error fetching profile:', error);
      throw error;
    }
  }

  static async updateProfile(updateData) {
    try {
      Logger.info('Updating profile data:', updateData);
      
      // Validate the update data
      const errors = Profile.validate(updateData);
      if (errors.length > 0) {
        throw new Error(`Validation failed: ${errors.join(', ')}`);
      }

      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Merge with existing data
      const updatedProfile = new Profile({
        ...mockProfileData,
        ...updateData,
        updatedAt: new Date()
      });

      return updatedProfile;
    } catch (error) {
      Logger.error('Error updating profile:', error);
      throw error;
    }
  }

  static async getSkills() {
    try {
      Logger.info('Fetching skills data');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      return mockProfileData.skills;
    } catch (error) {
      Logger.error('Error fetching skills:', error);
      throw error;
    }
  }

  static async getProjects() {
    try {
      Logger.info('Fetching projects data');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      return mockProfileData.projects;
    } catch (error) {
      Logger.error('Error fetching projects:', error);
      throw error;
    }
  }

  static async getExperience() {
    try {
      Logger.info('Fetching experience data');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      return mockProfileData.experience;
    } catch (error) {
      Logger.error('Error fetching experience:', error);
      throw error;
    }
  }
}

module.exports = ProfileService; 