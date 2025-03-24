import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ChevronRight, Search, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Sample blog data that would come from a database
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with React and Node.js",
    excerpt: "Learn the best practices for building high-performance web applications that can scale to millions of users.",
    date: "March 15, 2023",
    readTime: "8 min read",
    author: "Ezekiel Gwamna",
    category: "Web Development",
    tags: ["React", "Node.js", "Architecture", "Performance"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Implementing Authentication and Authorization in Modern Web Apps",
    excerpt: "A comprehensive guide to implementing secure authentication and authorization systems in your applications.",
    date: "February 22, 2023",
    readTime: "12 min read",
    author: "Ezekiel Gwamna",
    category: "Security",
    tags: ["Authentication", "JWT", "Security", "OAuth"],
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Advanced State Management Patterns in React Applications",
    excerpt: "Explore different state management solutions beyond Redux and when to use each approach.",
    date: "January 10, 2023",
    readTime: "10 min read",
    author: "Ezekiel Gwamna",
    category: "React",
    tags: ["React", "State Management", "Context API", "Recoil"],
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Optimizing Database Performance in High-Traffic Applications",
    excerpt: "Learn techniques to optimize your database queries and structure for handling high traffic loads.",
    date: "December 5, 2022",
    readTime: "15 min read",
    author: "Ezekiel Gwamna",
    category: "Database",
    tags: ["PostgreSQL", "Optimization", "Indexing", "Performance"],
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Implementing CI/CD Pipelines for Modern Web Applications",
    excerpt: "A step-by-step guide to setting up continuous integration and deployment for web projects.",
    date: "November 18, 2022",
    readTime: "9 min read",
    author: "Ezekiel Gwamna",
    category: "DevOps",
    tags: ["CI/CD", "GitHub Actions", "Jenkins", "DevOps"],
    imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Building Accessible Web Interfaces: WCAG Compliance Guide",
    excerpt: "How to ensure your web applications meet accessibility standards and provide an inclusive experience.",
    date: "October 30, 2022",
    readTime: "11 min read",
    author: "Ezekiel Gwamna",
    category: "Accessibility",
    tags: ["Accessibility", "WCAG", "a11y", "Inclusive Design"],
    imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80"
  }
];

// Get all unique categories and tags
const allCategories = Array.from(new Set(blogPosts.map(post => post.category)));
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Filter blog posts based on search, category, and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === null || 
      post.category === selectedCategory;
    
    const matchesTag = selectedTag === null || 
      post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedTag(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Blog & Articles</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Insights, tutorials, and thoughts on web development, software engineering, and technology trends.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl shadow-md p-6 sticky top-24">
                <div className="mb-8">
                  <Input 
                    type="search" 
                    placeholder="Search articles..." 
                    className="bg-background text-foreground"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="mb-8">
                  <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                  <div className="space-y-2">
                    {allCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.slice(0, 10).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          selectedTag === tag
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="relative aspect-video">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-muted-foreground text-sm mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="ghost" className="text-primary hover:text-primary/80">
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 bg-card rounded-xl shadow-md p-8 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Subscribe to My Newsletter</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get notified about new articles, tutorials, and exclusive content delivered straight to your inbox. 
              No spam, unsubscribe at any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background text-foreground"
              />
              <Button>Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;