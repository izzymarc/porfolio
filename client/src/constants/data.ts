import { Github, Linkedin, Twitter, LucideIcon, Instagram } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  availability: string;
  about: string;
  education: Education[];
  experience: Experience[];
  certifications: Certification[];
  socialLinks: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}

export const personalInfo: PersonalInfo = {
  name: "Ezekiel Funom Gwamna",
  title: "Software Engineer & Data Analyst",
  email: "ezekiel.gwamna@hotmail.com",
  phone: "+2349080000236",
  location: "No. 4 Amina Abubakar Close, Katampe Extension, Abuja, FCT",
  bio: "Innovative Software Engineer with strong expertise in back-end development and AI-powered solutions, complemented by specialized training in global health systems and leadership. Combines systems thinking and strategic planning with hands-on technical skills to design impactful, scalable technology solutions. Experienced in multidisciplinary collaboration across engineering and public health contexts, with a consistent focus on evidence-based, data-driven approaches to solving complex problems and supporting organizational change.",
  resumeUrl: "/resume.pdf",
  githubUrl: "https://github.com/izzymarc",
  linkedinUrl: "https://linkedin.com/in/ezekiel-funom-gwamna3b3060159",
  twitterUrl: "https://twitter.com/ezekielgwamna",
  availability: "Available for immediate start or with standard notice period",
  about: "I am a Software Engineer and Data Analyst currently completing my B.Sc. in Computer Science at the National Open University of Nigeria, with an ALX Software Engineering certification. I bring together strong back-end development skills, AI-powered solutions, and specialized training in global health systems and leadership to deliver impactful, scalable technology solutions.",
  education: [
    {
      degree: "B.Sc. Computer Science (400 Level)",
      institution: "National Open University of Nigeria (NOUN)",
      year: "Expected Q1 2026"
    },
    {
      degree: "ALX Software Engineering Program",
      institution: "ALX Africa",
      year: "Completed Nov 2024"
    }
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "Freelance & Contract",
      period: "2022-Present",
      description: "Designing and developing back-end systems and REST APIs using Python (Flask) and Node.js. Building AI-powered automation tools and data pipelines. Collaborating with clients on full-stack web applications and database optimization."
    },
    {
      title: "ALX Software Engineering Trainee",
      company: "ALX Africa",
      period: "2023-2024",
      description: "Completed intensive full-stack software engineering training covering back-end development, API design, database modeling, version control (Git/GitHub), Agile methodologies, and collaborative software development."
    }
  ],
  certifications: [
    {
      name: "Forage (Citi) Software Dev Simulation",
      issuer: "Forage — Certificate ID: aeojn4g3GDLYu2DaH",
      year: "2025"
    },
    {
      name: "Certified Cryptocurrency Trader",
      issuer: "Blockchain Council",
      year: "2019"
    },
    {
      name: "Transforming Your Leadership and Management Skills",
      issuer: "University of Washington",
      year: "2026"
    },
    {
      name: "Redesigning Global Health",
      issuer: "University of Washington",
      year: "2026"
    },
    {
      name: "Leadership and Management in Health",
      issuer: "University of Washington",
      year: "2025"
    },
    {
      name: "Economic Evaluation in Global Health",
      issuer: "University of Washington",
      year: "2024"
    },
    {
      name: "Project Management in Global Health",
      issuer: "University of Washington",
      year: "2024"
    },
    {
      name: "Monitoring and Evaluation in Global Health",
      issuer: "University of Washington",
      year: "2024"
    }
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/izzymarc",
      icon: Github
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ezekiel-funom-gwamna3b3060159",
      icon: Linkedin
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ezekielgwamna",
      icon: Twitter
    },
    {
      name: "Instagram",
      url: "https://instagram.com/ezekielgwamna",
      icon: Instagram
    }
  ]
};

export const about = {
  description: [
    "I'm an innovative Software Engineer and Data Analyst with strong expertise in back-end development using Python (Flask) and Node.js, complemented by specialized training in global health systems and leadership.",
    "My technical journey includes completing the ALX Software Engineering Program and pursuing a B.Sc. in Computer Science at the National Open University of Nigeria. I combine practical software engineering skills with certifications in global health from the University of Washington, enabling me to bridge technology and public health.",
    "I specialize in building REST APIs, designing scalable databases, and leveraging AI tools for process automation. My work is grounded in systems thinking and evidence-based, data-driven approaches to solving complex problems and supporting organizational change."
  ],
  education: {
    degree: "B.Sc. Computer Science (in progress)",
    institution: "National Open University of Nigeria (NOUN)",
    year: "Expected Q1 2026"
  },
  experience: {
    position: "Software Engineer",
    company: "Freelance & Contract",
    period: "2022-Present"
  },
  interests: ["Back-End Development", "AI & Automation", "Global Health Systems", "Data Analysis", "API Design", "Leadership & Management", "Blockchain"]
};

export type Skill = {
  name: string;
  percentage: number;
};

export const skills = {
  frontend: [
    { name: "React.js", percentage: 85 },
    { name: "JavaScript (ES6+)", percentage: 90 },
    { name: "HTML5/CSS3", percentage: 90 },
    { name: "TypeScript", percentage: 75 }
  ],
  backend: [
    { name: "Python (Flask)", percentage: 90 },
    { name: "Node.js/Express.js", percentage: 85 },
    { name: "REST API Design", percentage: 90 },
    { name: "SQL/PostgreSQL", percentage: 80 }
  ],
  artificialIntelligence: [
    { name: "AI Prompt Engineering", percentage: 85 },
    { name: "AI Tools & Automation", percentage: 80 },
    { name: "Data Analysis & BI", percentage: 75 },
    { name: "Machine Learning", percentage: 65 }
  ],
  devTools: [
    "Git & GitHub",
    "VS Code",
    "Docker",
    "Agile/Scrum",
    "Linux/Ubuntu"
  ],
  libraries: [
    "Flask",
    "React",
    "Tailwind CSS",
    "Pandas",
    "NumPy",
    "REST APIs"
  ],
  softSkills: [
    "Leadership & Strategic Planning",
    "Stakeholder Management",
    "Agile Delivery",
    "Change Management",
    "Cross-Functional Collaboration",
    "Mentoring",
    "Problem Solving",
    "Communication"
  ]
};

export type Project = {
  title: string;
  category: string;
  description: string;
  problem: string;
  approach: string;
  solution: string;
  impact: string;
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
  sourceUrl: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  gallery?: string[];
};

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    category: "Full Stack",
    description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and seamless payment processing.",
    problem: "Small businesses needed an affordable, scalable e-commerce solution that could handle real-time inventory updates and provide a smooth checkout experience.",
    approach: "Implemented a microservices architecture using Node.js for better scalability, with React for the frontend. Used WebSocket for real-time inventory updates and integrated Stripe for secure payments.",
    solution: "Developed a full-featured e-commerce platform with real-time inventory tracking, automated order processing, and analytics dashboard for business owners.",
    impact: "Helped 50+ small businesses increase their online sales by an average of 40%. The platform currently processes over 1000 orders per month with a 99.9% uptime.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "WebSocket", "Stripe", "Redis", "Docker"],
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
    demoUrl: "https://ezekielgwamna.me/ecommerce/",
    sourceUrl: "https://github.com/izzymarc/ecommerce",
    metrics: [
      {
        label: "Increase in Sales",
        value: "40%"
      },
      {
        label: "Active Users",
        value: "5000+"
      },
      {
        label: "Uptime",
        value: "99.9%"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
      "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80"
    ]
  },
  {
    title: "AI-Powered Content Manager",
    category: "Machine Learning",
    description: "An intelligent content management system that uses AI to automatically categorize, tag, and optimize content for better engagement.",
    problem: "Content creators struggled with manual content organization and optimization, leading to inefficient workflows and suboptimal content performance.",
    approach: "Leveraged natural language processing and machine learning algorithms to automate content analysis. Implemented a user-friendly interface for content management.",
    solution: "Built an AI-powered platform that automatically analyzes, categorizes, and suggests optimizations for content, while providing detailed analytics.",
    impact: "Reduced content processing time by 60% for clients. Improved content engagement rates by an average of 35% through AI-powered optimization suggestions.",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "AWS", "Docker"],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    demoUrl: "https://ezekielgwamna.me/ai-cms/",
    sourceUrl: "https://github.com/izzymarc/ai-cms",
    metrics: [
      {
        label: "Time Saved",
        value: "60%"
      },
      {
        label: "Engagement Increase",
        value: "35%"
      },
      {
        label: "Active Projects",
        value: "100+"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1673187359217-c2e51be3d347?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
      "https://images.unsplash.com/photo-1675271591211-126ad94e495d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
      "https://images.unsplash.com/photo-1676277791608-ac54954d687b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
      "https://images.unsplash.com/photo-1675270335014-9c9c3e47e369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80"
    ]
  },
  {
    title: "Financial Analytics Dashboard",
    category: "Data Visualization",
    description: "A comprehensive financial analytics dashboard that provides real-time insights and predictive analysis for investment decisions.",
    problem: "Investment firms needed a centralized platform to visualize and analyze complex financial data in real-time for better decision-making.",
    approach: "Built a responsive dashboard using React and D3.js for visualization, with a Python backend for data processing and predictive analytics.",
    solution: "Created an intuitive dashboard with interactive charts, real-time market data integration, and AI-powered trend analysis.",
    impact: "Helped clients improve investment returns by 25% through better data visualization and predictive insights. Now used by 20+ investment firms.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis", "AWS"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    demoUrl: "https://ezekielgwamna.me/finance-dashboard/",
    sourceUrl: "https://github.com/izzymarc/finance-dashboard",
    metrics: [
      {
        label: "Investment Return Increase",
        value: "25%"
      },
      {
        label: "Active Firms",
        value: "20+"
      },
      {
        label: "Daily Active Users",
        value: "500+"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80"
    ]
  }
];

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export interface ServiceCategory {
  title: string;
  icon: string;
  services: string[];
}

export const servicesData: ServiceCategory[] = [
  {
    title: "💻 Software Development",
    icon: "Code",
    services: [
      "Full-Stack Web Development",
      "Front-End Web Development",
      "Back-End Development",
      "Interactive Web Application Development",
      "Landing Page Development",
      "Small Business Website Development",
      "Responsive Website Development",
      "REST API Development & Integration",
      "Website Maintenance & Optimization"
    ]
  },
  {
    title: "📱 Mobile App Development",
    icon: "Smartphone",
    services: [
      "Native Android App Development",
      "Native iOS App Development",
      "Cross-Platform Mobile App Development",
      "Mobile App UI Implementation"
    ]
  },
  {
    title: "🤖 AI & Automation",
    icon: "Bot",
    services: [
      "AI Agent Development",
      "AI Agent Evaluation",
      "AI Safety Evaluation",
      "AI Model Testing & Validation",
      "AI Data Annotation & Quality Assurance",
      "Python Automation",
      "Workflow Automation"
    ]
  },
  {
    title: "💬 Messaging & Chatbots",
    icon: "MessageSquare",
    services: [
      "Telegram Bot Development",
      "WhatsApp Business API Integration",
      "AI Chatbot Development",
      "Customer Support Automation",
      "Messaging Platform Integration"
    ]
  },
  {
    title: "🐍 Python Development",
    icon: "Terminal",
    services: [
      "Python Software Development",
      "Python Automation Scripts",
      "Web Scraping",
      "Data Scraping",
      "Browser Automation",
      "API Integration",
      "Data Processing"
    ]
  },
  {
    title: "🌐 DevOps & Deployment",
    icon: "Server",
    services: [
      "Linux Server Administration",
      "Ubuntu Server Setup",
      "Nginx Configuration",
      "Web Application Deployment",
      "SSH Configuration",
      "Git & GitHub Workflow",
      "CI/CD Pipeline Setup (Basic)",
      "Docker Containerization"
    ]
  },
  {
    title: "🎨 Design Services",
    icon: "Palette",
    services: [
      "Brand Identity Design",
      "Logo Design",
      "Visual Identity Design",
      "Graphic Design",
      "Web Design",
      "UI/UX Design",
      "Presentation Design",
      "Marketing Graphics"
    ]
  },
  {
    title: "📊 Data & Research",
    icon: "BarChart",
    services: [
      "Data Collection",
      "Data Cleaning",
      "Data Extraction",
      "Web Data Mining",
      "Research Support",
      "AI Dataset Preparation"
    ]
  },
  {
    title: "🔍 Quality Assurance",
    icon: "Search",
    services: [
      "Software Testing",
      "Website Testing",
      "AI Model Evaluation",
      "Bug Identification",
      "Performance Testing"
    ]
  },
  {
    title: "🏥 Global Health Systems",
    icon: "Heart",
    services: [
      "Health Data Management Systems",
      "Monitoring & Evaluation Frameworks",
      "DALY Calculations & Health Metrics",
      "Budget Impact Analysis",
      "Economic Evaluation in Health",
      "Digital Health Interventions",
      "Health Systems Strengthening",
      "Public Health Program Evaluation"
    ]
  }
];
