import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { about, personalInfo } from "@/constants/data";
import { Briefcase, GraduationCap, Heart, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { useRef } from "react";

const profileImageUrl = "https://via.placeholder.com/400";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity }}
      id="about" 
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
            rotate: [90, 0, 90]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <motion.div 
            className="h-1 w-20 bg-primary mx-auto mt-4 mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Get to know more about me, my background, and what drives me as a software engineer.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div 
            className="md:w-2/5"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary/20 rounded-lg blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                  rotate: [0, 360, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative overflow-hidden rounded-lg">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <img 
                  src={profileImageUrl} 
                  alt="Ezekiel Funom Gwamna" 
                  className="rounded-lg shadow-lg w-full object-cover h-80 md:h-96 relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5"
            style={{ y }}
            viewport={{ once: true }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.h3 
              className="text-2xl font-bold mb-4 relative inline-block"
              variants={itemVariants}
            >
              Who I Am
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </motion.h3>
            {about.description.map((paragraph, index) => (
              <motion.p 
                key={index} 
                className="text-muted-foreground mb-4"
                variants={itemVariants}
              >
                {paragraph}
              </motion.p>
            ))}
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
              variants={containerVariants}
            >
              {[
                {
                  icon: GraduationCap,
                  title: "Education",
                  content: about.education.degree,
                  subcontent: `${about.education.institution}, ${about.education.year}`
                },
                {
                  icon: Briefcase,
                  title: "Experience",
                  content: about.experience.position,
                  subcontent: `${about.experience.company}, ${about.experience.period}`
                },
                {
                  icon: MapPin,
                  title: "Workplace",
                  content: "Globalsync Technologies"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: personalInfo.location
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg bg-card/50 hover:bg-card transition-colors duration-300 group"
                >
                <h4 className="font-semibold mb-2 flex items-center">
                    <item.icon className="mr-2 text-primary group-hover:scale-110 transition-transform" size={18} />
                    {item.title}
                </h4>
                  <p className="text-muted-foreground">{item.content}</p>
                  {item.subcontent && (
                    <p className="text-muted-foreground text-sm">{item.subcontent}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
                <h4 className="font-semibold mb-2 flex items-center">
                  <Heart className="mr-2 text-primary" size={18} />
                  Interests
                </h4>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 rounded-full bg-primary/10 text-sm text-primary"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Button 
                className="gap-2 group relative overflow-hidden"
                onClick={scrollToContact}
              >
                <span className="relative z-10">Let's Connect</span>
                <MessageCircle size={16} className="relative z-10 group-hover:rotate-12 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-primary/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
            </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
