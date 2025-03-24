import { motion } from "framer-motion";
import { Code, Wrench, ChevronRight } from "lucide-react";
import { skills, Skill } from "@/constants/data";
import { useEffect, useRef, useState } from "react";

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && barRef.current) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = `${skill.percentage}%`;
              }
            }, 100 + index * 100); // Stagger the animations
          }
        });
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) observer.unobserve(barRef.current);
    };
  }, [skill.percentage, index]);

  return (
    <motion.div
      className="group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {skill.percentage}%
        </motion.span>
      </div>
      <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
        <motion.div
          ref={barRef}
          className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: "0%" }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            animate={{
              x: ["0%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillTag = ({ name, icon, index }: { name: string; icon?: React.ReactNode; index: number }) => (
  <motion.div
    className="flex items-center gap-2 bg-card text-card-foreground px-4 py-2 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.2 }}
    whileHover={{ scale: 1.05 }}
  >
    {icon}
    <span>{name}</span>
    <motion.div
      className="opacity-0 group-hover:opacity-100 transition-opacity"
      initial={{ x: -10 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <ChevronRight size={16} />
    </motion.div>
  </motion.div>
);

const SkillsSection = () => {
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
    <section id="skills" className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Here are the technologies and tools I specialize in to create exceptional web applications.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6"
              variants={itemVariants}
            >
              Technical Skills
            </motion.h3>
            
            {/* Frontend */}
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <h4 className="font-semibold mb-4 text-lg text-primary/80">Frontend Development</h4>
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
            
            {/* Backend */}
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <h4 className="font-semibold mb-4 text-lg text-primary/80">Backend Development</h4>
              <div className="space-y-4">
                {skills.backend.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Artificial Intelligence */}
            <motion.div
              variants={itemVariants}
            >
              <h4 className="font-semibold mb-4 text-lg text-primary/80">Artificial Intelligence</h4>
              <div className="space-y-4">
                {skills.artificialIntelligence.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Other Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6"
              variants={itemVariants}
            >
              Other Skills & Tools
            </motion.h3>
            
            <motion.div 
              className="flex flex-wrap gap-3 mb-8"
              variants={itemVariants}
            >
              <h4 className="w-full font-semibold mb-2 text-lg text-primary/80">Dev Tools & Workflow</h4>
              
              {skills.devTools.map((tool, index) => (
                <SkillTag key={tool} name={tool} icon={<Wrench className="w-4 h-4" />} index={index} />
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-3 mb-8"
              variants={itemVariants}
            >
              <h4 className="w-full font-semibold mb-2 text-lg text-primary/80">Libraries & Frameworks</h4>
              
              {skills.libraries.map((lib, index) => (
                <SkillTag key={lib} name={lib} icon={<Code className="w-4 h-4" />} index={index} />
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={itemVariants}
            >
              <h4 className="w-full font-semibold mb-2 text-lg text-primary/80">Soft Skills</h4>
              
              {skills.softSkills.map((skill, index) => (
                <SkillTag key={skill} name={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
