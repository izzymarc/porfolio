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

interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  shortBio: string;
  resumeUrl: string;
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
  shortBio: "Passionate Full Stack Developer with expertise in building modern web applications. Specialized in React, Node.js, and cloud technologies.",
  resumeUrl: "/resume.pdf",
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
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
  sourceUrl: string;
};

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    category: "React, Node.js, MongoDB",
    description: "A fully responsive e-commerce platform with user authentication, product catalog, shopping cart, and payment processing.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    demoUrl: "https://project1.example.com",
    sourceUrl: "https://github.com/ezekielgwamna/ecommerce"
  },
  {
    title: "Task Management App",
    category: "React, Redux, Firebase",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Redux", "Firebase", "React DnD"],
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    demoUrl: "https://project2.example.com",
    sourceUrl: "https://github.com/ezekielgwamna/taskmanager"
  },
  {
    title: "Finance Dashboard",
    category: "React, D3.js, Express",
    description: "An interactive financial dashboard with data visualization, budget tracking, and expense analysis tools.",
    technologies: ["React", "D3.js", "Express", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80",
    demoUrl: "https://project3.example.com",
    sourceUrl: "https://github.com/ezekielgwamna/finance-dashboard"
  }
];

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
