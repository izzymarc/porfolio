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
  title: "Full Stack Developer",
  email: "ezekiel.gwamna@hotmail.com",
  phone: "+2349080000236",
  location: "Abuja Nigeria #8 Dalhatu Maccido Street, Katampe Extension Abuja, FCT, Nigeria",
  bio: "Full-stack software engineer with over 7 years of experience designing and developing web applications across various domains including e-commerce, fintech, and digital marketing. Skilled in artificial intelligence and machine learning technologies with a focus on practical applications.",
  resumeUrl: "/resume.pdf",
  githubUrl: "https://github.com/izzymarc",
  linkedinUrl: "https://linkedin.com/in/izzymarc",
  twitterUrl: "https://twitter.com/izzymarc",
  availability: "Available for freelance work and full-time positions",
  about: "I am a dedicated Full Stack Developer with a passion for creating efficient, scalable, and user-friendly web applications. With a strong foundation in both front-end and back-end development, I strive to deliver high-quality solutions that meet client needs and exceed expectations.",
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Abuja",
      year: "2018-2022"
    }
  ],
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022-Present",
      description: "Leading the development of enterprise-level web applications using React, Node.js, and TypeScript."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd",
      period: "2021-2022",
      description: "Developed and maintained multiple client projects, focusing on responsive design and optimal performance."
    }
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "Professional Full Stack Developer",
      issuer: "Meta",
      year: "2022"
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
      url: "https://linkedin.com/in/ezekielgwamna",
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
    "I'm a passionate Full Stack Software Engineer with 5+ years of experience building web applications and digital solutions. My journey in technology began at the University of Technology, where I earned my Bachelor's degree in Computer Science.",
    "Throughout my career, I've worked with various teams and clients, from startups to enterprises, helping them bring their digital products to life. I specialize in React.js, Node.js, and cloud technologies, with a focus on creating scalable and maintainable solutions."
  ],
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    year: "2018"
  },
  experience: {
    position: "Senior Software Engineer",
    company: "Globalsync Technologies",
    period: "2020-Present"
  },
  interests: ["Open Source", "Cloud Computing", "AI"]
};

export type Skill = {
  name: string;
  percentage: number;
};

export const skills = {
  frontend: [
    { name: "React.js", percentage: 90 },
    { name: "JavaScript (ES6+)", percentage: 95 },
    { name: "CSS/SASS", percentage: 85 },
    { name: "TypeScript", percentage: 80 }
  ],
  backend: [
    { name: "Node.js", percentage: 85 },
    { name: "Express.js", percentage: 90 },
    { name: "MongoDB", percentage: 80 },
    { name: "SQL/PostgreSQL", percentage: 75 }
  ],
  artificialIntelligence: [
    { name: "Machine Learning", percentage: 85 },
    { name: "Natural Language Processing", percentage: 80 },
    { name: "Computer Vision", percentage: 75 },
    { name: "Deep Learning", percentage: 70 }
  ],
  devTools: [
    "Git & GitHub",
    "Command Line",
    "AWS",
    "VS Code",
    "Webpack"
  ],
  libraries: [
    "Redux",
    "Next.js",
    "Tailwind CSS",
    "Material UI",
    "Jest",
    "GraphQL"
  ],
  softSkills: [
    "Team Collaboration",
    "Time Management",
    "Communication",
    "Problem Solving",
    "Leadership"
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
    demoUrl: "https://ecommerce-demo.example.com",
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
    demoUrl: "https://ai-cms-demo.example.com",
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
    demoUrl: "https://finance-dashboard-demo.example.com",
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
