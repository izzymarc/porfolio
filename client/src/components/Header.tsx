import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Code, BookOpen, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/constants/data";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Already on home page, scroll to services
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: "/", label: "Home", icon: Home, isPage: true },
    { path: "/about", label: "About", icon: User, isPage: true },
    { path: "/services", label: "Services", icon: Briefcase, isPage: false, onClick: handleServicesClick },
    { path: "/projects", label: "Projects", icon: Code, isPage: true },
    { path: "/blog", label: "Blog", icon: BookOpen, isPage: true },
    { path: "/resume", label: "Resume", icon: FileText, isPage: true },
    { path: "/contact", label: "Contact", icon: Mail, isPage: true },
  ];

  // Single source of truth: adding a platform to personalInfo.socialLinks
  // surfaces it here automatically instead of needing a parallel list.
  const socialLinks = personalInfo.socialLinks;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isMenuOpen ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-primary dark:text-white">Ezekiel</span>
            <span className="text-emerald-500 dark:text-white">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              if (!item.isPage && item.onClick) {
                return (
                  <a
                    key={item.path}
                    href="#services"
                    onClick={item.onClick}
                    className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </a>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed inset-0 bg-background z-40 pt-16"
            >
              <nav className="container mx-auto px-4 py-8">
                <div className="flex flex-col space-y-6">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    if (!item.isPage && item.onClick) {
                      return (
                        <a
                          key={item.path}
                          href="#services"
                          onClick={item.onClick}
                          className="flex items-center space-x-3 text-lg font-medium transition-colors hover:text-primary text-muted-foreground"
                        >
                          <Icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </a>
                      );
                    }
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center space-x-3 text-lg font-medium transition-colors hover:text-primary ${
                          location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
