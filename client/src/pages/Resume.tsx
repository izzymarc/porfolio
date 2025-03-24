import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
}

interface SkillGroup {
  category: string;
  items: string[];
}

const education: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    duration: "2015 - 2017",
    description: "Specialized in Software Engineering and Distributed Systems. Graduated with a 3.9 GPA. Thesis on 'Optimizing Distributed Database Performance in Cloud Environments'."
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    duration: "2011 - 2015",
    description: "Dean's List for all semesters. Participated in the ACM programming competition. Completed internships at Google and Microsoft."
  }
];

const experience: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    duration: "2018 - Present",
    description: "Led a team of 5 engineers in developing and maintaining a high-traffic e-commerce platform. Implemented microservices architecture and improved system performance by 40%.",
    technologies: ["React", "Node.js", "TypeScript", "GraphQL", "Docker", "Kubernetes"]
  },
  {
    title: "Software Engineer",
    company: "StartupX",
    location: "San Francisco, CA",
    duration: "2017 - 2018",
    description: "Developed and maintained multiple client-facing applications. Implemented CI/CD pipelines and automated testing infrastructure.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Jest"]
  }
];

const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Go", "SQL", "HTML5", "CSS3"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Express", "Django", "TailwindCSS", "Redux", "GraphQL"]
  },
  {
    category: "Artificial Intelligence",
    items: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Deep Learning", "TensorFlow", "PyTorch"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "Kubernetes", "AWS", "Google Cloud", "CI/CD", "Webpack", "Jest"]
  },
  {
    category: "Methodologies",
    items: ["Agile/Scrum", "Test-Driven Development", "CI/CD", "Microservices", "RESTful APIs"]
  }
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    date: "2022",
    url: "https://aws.amazon.com/certification/certified-solutions-architect-professional/"
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2021",
    url: "https://cloud.google.com/certification/cloud-architect"
  },
  {
    name: "MongoDB Certified Developer Associate",
    issuer: "MongoDB",
    date: "2020",
    url: "https://university.mongodb.com/certification"
  }
];

const ResumePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Resume</h1>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <div className="space-y-8">
          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="space-y-6">
              {education.map((edu: Education, index: number) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.location}</p>
                  <p className="text-muted-foreground">{edu.duration}</p>
                  <p className="mt-2">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp: Experience, index: number) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.location}</p>
                  <p className="text-muted-foreground">{exp.duration}</p>
                  <p className="mt-2">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup: SkillGroup, index: number) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill: string, skillIndex: number) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                  <p className="text-muted-foreground mb-4">{cert.date}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumePage;