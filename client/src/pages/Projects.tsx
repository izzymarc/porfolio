import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { projects } from "@/constants/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Image } from "@/components/ui/image";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-video">
        <Image 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground">{project.title}</h3>
          <Badge variant="secondary" className="self-start">
            {project.category}
          </Badge>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {project.technologies.slice(0, 3).map((tech: string) => (
            <Badge 
              key={tech} 
              variant="outline"
              className="text-xs sm:text-sm bg-muted/50 text-muted-foreground"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs sm:text-sm bg-muted/50 text-muted-foreground">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:justify-between">
          <Button variant="default" className="w-full sm:w-auto" asChild>
            <Link to={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}>
              View Case Study
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <div className="flex gap-2 sm:gap-4">
            <Button variant="ghost" size="icon" className="flex-1 sm:flex-none" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                Live
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="flex-1 sm:flex-none" asChild>
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get all unique categories
  const categories = Array.from(new Set(projects.map(project => project.category)));

  useEffect(() => {
    // Filter projects based on search term and category
    const results = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === null || project.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredProjects(results);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-16 sm:pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">My Projects</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-3 sm:mt-4 mb-4 sm:mb-8 rounded-full"></div>
            <p className="max-w-3xl mx-auto text-sm sm:text-base text-muted-foreground px-4">
              Explore my latest projects and applications. Each project represents my commitment to clean code, 
              intuitive user experiences, and solving real-world problems.
            </p>
          </motion.div>
          
          {/* Search and Filter */}
          <motion.div 
            className="bg-card rounded-xl shadow-md p-4 sm:p-6 mb-6 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mb-4 sm:mb-6">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background text-foreground text-sm sm:text-base"
              />
            </div>
            
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-foreground mb-3 sm:mb-4">Filter by:</h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedCategory === null ? "default" : "outline"}
                  className="cursor-pointer text-xs sm:text-sm"
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </Badge>
                
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer text-xs sm:text-sm"
                    onClick={() => setSelectedCategory(
                      selectedCategory === category ? null : category
                    )}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            ) : (
              <motion.div 
                className="text-center py-8 sm:py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-muted-foreground text-sm sm:text-lg mb-4">No projects found matching your criteria.</p>
                <Button onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory(null);
                }}>View All Projects</Button>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 sm:mt-20 bg-card rounded-xl shadow-md p-6 sm:p-8 text-center"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">Have a Project in Mind?</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life. I'm always excited to take on new challenges 
              and create something amazing.
            </p>
            <Button asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;