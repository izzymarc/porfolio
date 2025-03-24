import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Calendar, Clock, User, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  tags: string[];
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a new React project with TypeScript and best practices for type safety.",
    date: "2024-03-15",
    readTime: "5 min read",
    author: "John Doe",
    category: "Development",
    tags: ["React", "TypeScript", "Web Development"],
    imageUrl: "/blog/react-typescript.jpg"
  },
  {
    id: "2",
    title: "The Future of Web Development",
    excerpt: "Explore upcoming trends and technologies that are shaping the future of web development.",
    date: "2024-03-10",
    readTime: "8 min read",
    author: "Jane Smith",
    category: "Technology",
    tags: ["Web Development", "Future Tech", "Trends"],
    imageUrl: "/blog/future-web.jpg"
  },
  {
    id: "3",
    title: "Building Scalable Applications",
    excerpt: "Best practices and patterns for building scalable web applications that can handle growth.",
    date: "2024-03-05",
    readTime: "6 min read",
    author: "Mike Johnson",
    category: "Architecture",
    tags: ["Scalability", "Architecture", "Best Practices"],
    imageUrl: "/blog/scalable-apps.jpg"
  }
];

const categories = ["All", "Development", "Technology", "Architecture", "Design"];
const tags = ["React", "TypeScript", "Web Development", "Future Tech", "Trends", "Scalability", "Architecture", "Best Practices", "Design"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
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

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
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

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "secondary"}
              className="cursor-pointer"
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="grid gap-8">
          <AnimatePresence>
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-md"
              >
                <div className="aspect-video bg-muted relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="ghost" className="gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts found matching your criteria.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Blog;