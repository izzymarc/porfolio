import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { projects } from "@/constants/data";
import { Link } from "wouter";

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
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Projects</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Explore my latest projects and applications. Each project represents my commitment to clean code, 
              intuitive user experiences, and solving real-world problems.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="bg-card rounded-xl shadow-md p-6 mb-10">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects by name, description or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background text-foreground"
              />
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Filter by:</h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedCategory === null ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </Badge>
                
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(
                      selectedCategory === category ? null : category
                    )}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl shadow-md overflow-hidden"
                >
                  <div className="relative aspect-video">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="bg-muted text-muted-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <Button variant="default" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">No projects found matching your criteria.</p>
              <Button onClick={() => {
                setSearchTerm("");
                setSelectedCategory(null);
              }}>View All Projects</Button>
            </div>
          )}
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 bg-card rounded-xl shadow-md p-8 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Have a Project in Mind?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life. I'm always excited to take on new challenges 
              and create something amazing.
            </p>
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;