import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import { personalInfo, skills } from "@/constants/data";

const ResumePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
            <p className="text-xl text-muted-foreground mt-1">{personalInfo.title}</p>
            <p className="text-muted-foreground mt-2">{personalInfo.location}</p>
          </div>
          <Button asChild>
            <a href={personalInfo.resumeUrl} download>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>

        <div className="space-y-8">
          {/* Summary */}
          <motion.section
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
            <div className="bg-card rounded-lg p-6">
              <p className="text-muted-foreground">{personalInfo.bio}</p>
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              {personalInfo.education.map((edu) => (
                <motion.div
                  key={edu.degree}
                  variants={itemVariants}
                  className="bg-card rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="space-y-4">
              {personalInfo.experience.map((exp) => (
                <motion.div
                  key={exp.title}
                  variants={itemVariants}
                  className="bg-card rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company} — {exp.period}</p>
                  <p className="mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill.name} variant="secondary">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill.name} variant="secondary">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">AI & Data</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.artificialIntelligence.map((skill) => (
                    <Badge key={skill.name} variant="secondary">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Dev Tools & Workflow</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.devTools.map((tool) => (
                    <Badge key={tool} variant="secondary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Libraries & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.libraries.map((lib) => (
                    <Badge key={lib} variant="secondary">
                      {lib}
                    </Badge>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.softSkills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Certifications Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-semibold mb-4">Certifications & Training</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalInfo.certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  className="bg-card rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold mb-1">{cert.name}</h3>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm mt-1">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumePage;