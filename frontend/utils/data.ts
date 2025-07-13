import { Profile } from '../types/profile';

export const profileData: Profile = {
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
      description: "Built an integration platform using Java and Angular to support customer data integrations with applications like Procore, HubSpot, Salesforce. Developed asynchronous job processing to facilitate large-scale data migrations, and leveraged OpenSearch to intelligently match and unify client accounts across disparate systems.",
      imageUrl: "/projects/integration-platform.jpg",
      technologies: ["Java", "Angular", "OpenSearch", "REST APIs"],
      featured: true
    },
    {
      id: "2",
      title: "Document Center with AI",
      description: "Developed document center with Java/Angular for managing and sharing critical finance and contractor safety files. Improved by connecting to Python RAG API and parsing/prefilling data for customers.",
      imageUrl: "/projects/document-center.jpg",
      technologies: ["Java", "Angular", "Python", "RAG API", "Document Processing"],
      featured: true
    },
    {
      id: "3",
      title: "Geolocation Tool",
      description: "Developed a geolocation tool using React, Python, and MongoDB for a Tier 1 telecom provider, supporting the management of 40,000+ cell towers, 50,000+ small cell nodes, and 60,000+ route miles of fiber.",
      imageUrl: "/projects/geolocation-tool.jpg",
      technologies: ["React", "Python", "MongoDB", "gRPC", "Microservices"],
      featured: true
    },
    {
      id: "4",
      title: "Network Config Migration Tool",
      description: "Built a React/Python/Node.js tool to migrate thousands of EOL network configs, saving T-Mobile thousands of labor hours; integrated with NSO and Camunda.",
      imageUrl: "/projects/network-migration.jpg",
      technologies: ["React", "Python", "Node.js", "NSO", "Camunda"],
      featured: false
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
        "Develop backend schema and frontend UI/UX to deliver new features on a Java/Spring + Hibernate/Postgres backend and Angular 19 Frontend. Serving thousands of clients internationally.",
        "Built an integration platform using Java and Angular to support customer data integrations with applications like Procore, HubSpot, Salesforce.",
        "Developed our document center with Java/Angular for managing and sharing critical finance and contractor safety files.",
        "Build and maintain our RAG API to house our AI solutions such as our document reader that parses and reads customer provided documents.",
        "Upgraded Angular & PrimeNG from v13 to v19, refactoring the frontend to align with modern UI/UX best practices.",
        "Designed and developed a STAR schema to store historical client data and used Chart.js to populate graphs for user interaction."
      ],
      technologies: ["Java", "Spring", "Angular", "Postgres", "Python", "AWS", "Docker", "Chart.js"]
    },
    {
      id: "2",
      company: "Ductus",
      title: "Full Stack Engineer",
      location: "Maynard, MA",
      startDate: "May 2022",
      endDate: "August 2024",
      current: false,
      description: [
        "Contracted to global tier one network provider to develop innovative solutions, from scratch to fully production ready applications.",
        "Developed a geolocation tool using React, Python, and MongoDB for a Tier 1 telecom provider, supporting the management of 40,000+ cell towers, 50,000+ small cell nodes, and 60,000+ route miles of fiber.",
        "Built a React/Python/Node.js tool to migrate thousands of EOL network configs, saving T-Mobile thousands of labor hours; integrated with NSO and Camunda.",
        "Developed test strategies, Dockerize applications, created pipelines and automated deployment processes for customers.",
        "Developed efficient backend micro service applications that communicated via REST and GRPC."
      ],
      technologies: ["React", "Python", "MongoDB", "Node.js", "gRPC", "Docker", "NSO", "Camunda"]
    },
    {
      id: "3",
      company: "Acadia",
      title: "DevOps Engineer",
      location: "Norwell, MA",
      startDate: "May 2021",
      endDate: "May 2022",
      current: false,
      description: [
        "Design and Implement CI/CD Pipelines that automated testing and deployment of our applications.",
        "Set up monitoring and alerting systems with Prometheus, Grafana and Datadog.",
        "Managed and configured infrastructure through AWS and Terraform.",
        "Designed and Built UI in react js to manage deployments, monitoring and system administration operations.",
        "Deployed containerized applications using Docker and orchestrated with Kubernetes."
      ],
      technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "Prometheus", "Grafana", "Datadog", "React"]
    }
  ]
}; 