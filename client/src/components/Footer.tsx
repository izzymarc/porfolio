import { ArrowUp } from "lucide-react";
import { useLocation } from "wouter";
import { personalInfo } from "@/constants/data";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const navigationItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/" },
  { id: "skills", label: "Skills", path: "/" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "contact", label: "Contact", path: "/contact" }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [location] = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleNavigation = (item: { id: string; path: string }) => {
    if (item.path === "/") {
      // If we're already on the home page, scroll to section
      if (location === "/") {
        scrollToSection(item.id);
      } else {
        // If we're on another page, navigate to home and then scroll
        window.location.href = `/#${item.id}`;
      }
    } else {
      // For other pages, use normal navigation
      window.location.href = item.path;
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="mb-6 md:mb-0"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-2">{personalInfo.name}</h2>
            <p className="text-gray-400">{personalInfo.title}</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
            variants={itemVariants}
          >
            {navigationItems.map((item: { id: string; label: string; path: string }) => (
              <motion.li
                key={item.id}
                variants={itemVariants}
                className="relative"
              >
                <motion.button
                  onClick={() => handleNavigation(item)}
                  className="hover:text-primary/80 transition duration-300 group relative text-left"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative">
                    {item.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                    />
                  </span>
                </motion.button>
              </motion.li>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.hr 
          className="border-gray-800 my-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
        
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-400 mb-4 md:mb-0"
            variants={itemVariants}
          >
            © {currentYear} {personalInfo.name}. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex space-x-4"
            variants={itemVariants}
          >
            {personalInfo.socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition duration-300 z-50"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
