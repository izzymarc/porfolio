import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  tags: string[];
  imageUrl: string;
}

// Sample blog data that would come from a database
const blogPosts: BlogPost[] = [
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
  }
];

// Get all unique categories and tags
const categories = Array.from(new Set(blogPosts.map((post: BlogPost) => post.category)));
const tags = Array.from(new Set(blogPosts.flatMap((post: BlogPost) => post.tags)));

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter((post: BlogPost) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
          >
            All Categories
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            onClick={() => setSelectedTag(null)}
          >
            All Tags
          </Button>
          {tags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">No posts found matching your criteria.</p>
            </motion.div>
          ) : (
            <div className="grid gap-8">
              {filteredPosts.map((post: BlogPost) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-card rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="ghost" className="group">
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Blog;