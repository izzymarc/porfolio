import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ZoomIn } from "lucide-react";
import { Image } from "@/components/ui/image";
import { Lightbox } from "@/components/ui/lightbox";

interface CaseStudyProps {
  project: {
    title: string;
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
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const CaseStudy = ({ project }: CaseStudyProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-6 sm:mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 flex items-end">
          <div className="p-4 sm:p-6 md:p-8">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {project.title}
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {project.description}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Quick Links */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
        {...fadeInUp}
        transition={{ delay: 0.4 }}
      >
        <Button className="w-full sm:w-auto" asChild>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </a>
        </Button>
        <Button variant="outline" className="w-full sm:w-auto" asChild>
          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            Source Code
          </a>
        </Button>
      </motion.div>

      {/* Technologies */}
      <motion.div 
        className="mb-8 sm:mb-12"
        {...fadeInUp}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs sm:text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </motion.div>

      {/* Project Metrics */}
      {project.metrics && (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {project.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="bg-card p-4 sm:p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Main Content */}
      <motion.div 
        className="space-y-8 sm:space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <motion.section {...fadeInUp} transition={{ delay: 0.8 }}>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">The Problem</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.problem}</p>
        </motion.section>

        <motion.section {...fadeInUp} transition={{ delay: 0.9 }}>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">The Approach</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.approach}</p>
        </motion.section>

        <motion.section {...fadeInUp} transition={{ delay: 1.0 }}>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">The Solution</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.solution}</p>
        </motion.section>

        <motion.section {...fadeInUp} transition={{ delay: 1.1 }}>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Impact & Results</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.impact}</p>
        </motion.section>
      </motion.div>

      {/* Project Gallery */}
      {project.gallery && (
        <motion.section 
          className="mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Lightbox */}
      {lightboxOpen && project.gallery && (
        <Lightbox
          images={project.gallery}
          initialIndex={selectedImageIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </article>
  );
};

export default CaseStudy; 