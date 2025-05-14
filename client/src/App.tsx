import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Resume from "@/pages/Resume";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main className="flex-grow pt-24 pb-16">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                } />
                <Route path="/about" element={
                  <PageTransition>
                    <About />
                  </PageTransition>
                } />
                <Route path="/projects" element={
                  <PageTransition>
                    <Projects />
                  </PageTransition>
                } />
                <Route path="/projects/:id" element={
                  <PageTransition>
                    <ProjectDetail />
                  </PageTransition>
                } />
                <Route path="/blog" element={
                  <PageTransition>
                    <Blog />
                  </PageTransition>
                } />
                <Route path="/contact" element={
                  <PageTransition>
                    <Contact />
                  </PageTransition>
                } />
                <Route path="/resume" element={
                  <PageTransition>
                    <Resume />
                  </PageTransition>
                } />
                <Route path="*" element={
                  <PageTransition>
                    <NotFound />
                  </PageTransition>
                } />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
