import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/constants/data";
import { ArrowRight, Eye, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-card rounded-xl shadow-lg overflow-hidden border border-border hover:shadow-xl transition duration-300 group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden h-48">
        <motion.img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-foreground/90 to-transparent"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: isHovered ? 0.8 : 0.6 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 p-4"
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-card-foreground font-bold text-lg">{project.title}</h3>
          <p className="text-card-foreground/80 text-sm">{project.category}</p>
        </motion.div>
      </div>
      <div className="p-5">
        <motion.p 
          className="text-muted-foreground mb-4"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {project.description}
        </motion.p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <motion.span 
              key={tech} 
              className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded"
              whileHover={{ scale: 1.05, backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <motion.div 
          className="flex justify-between"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Eye size={16} />
            Live Demo
          </motion.a>
          <motion.a 
            href={project.sourceUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Code2 size={16} />
            Source Code
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Explore some of my recent work and the technologies I've used to build them.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a 
            href="https://github.com/ezekielgwamna" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium gap-1 group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            View All Projects on GitHub
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
