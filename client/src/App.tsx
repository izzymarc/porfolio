import { Route, Switch } from "wouter";
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
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Resume from "@/pages/Resume";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-grow pt-24 pb-16">
          <AnimatePresence mode="wait">
            <Switch>
              <Route path="/">
                <PageTransition>
                  <Home />
                </PageTransition>
              </Route>
              <Route path="/about">
                <PageTransition>
                  <About />
                </PageTransition>
              </Route>
              <Route path="/projects">
                <PageTransition>
                  <Projects />
                </PageTransition>
              </Route>
              <Route path="/blog">
                <PageTransition>
                  <Blog />
                </PageTransition>
              </Route>
              <Route path="/contact">
                <PageTransition>
                  <Contact />
                </PageTransition>
              </Route>
              <Route path="/resume">
                <PageTransition>
                  <Resume />
                </PageTransition>
              </Route>
              <Route>
                <PageTransition>
                  <NotFound />
                </PageTransition>
              </Route>
            </Switch>
          </AnimatePresence>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
