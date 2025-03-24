import { motion } from "framer-motion";
import { personalInfo } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Professional Background
              </h2>
              <p className="text-muted-foreground">
                {personalInfo.about}
              </p>
            </div>

            <div className="bg-card rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Education
              </h2>
              <div className="space-y-4">
                {personalInfo.education.map((edu, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-0">
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Experience
              </h2>
              <div className="space-y-4">
                {personalInfo.experience.map((exp, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-0">
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <p className="text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Certifications
              </h2>
              <div className="space-y-4">
                {personalInfo.certifications.map((cert, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-0">
                    <h3 className="font-semibold text-foreground">{cert.name}</h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg">
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 