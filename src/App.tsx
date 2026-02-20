import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Projects } from "./components/Projects";
import { TravelHighlights } from "./components/TravelHighlights";
import { Blog } from "./components/Blog";
import { HireMe } from "./components/HireMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { TravelAdmin } from "./components/admin/TravelAdmin";
import { AdminDebug } from "./components/AdminDebug";
import { AdminAccessButton } from "./components/AdminAccessButton";
import { AdminPasswordPrompt } from "./components/AdminPasswordPrompt";
import { useState, useEffect } from "react";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [showAdmin, setShowAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      // Check if URL contains admin
      if (window.location.pathname.includes("admin") || window.location.hash === "#admin") {
        handleAccessAdmin();
      }
    };

    // Check if user is already authenticated (session storage)
    const checkAuth = () => {
      const isAuth = sessionStorage.getItem("admin_authenticated") === "true";
      const authTime = sessionStorage.getItem("admin_auth_time");
      
      // Session expires after 24 hours
      if (isAuth && authTime) {
        const timeElapsed = Date.now() - parseInt(authTime);
        const hoursElapsed = timeElapsed / (1000 * 60 * 60);
        
        if (hoursElapsed < 24) {
          setIsAuthenticated(true);
        } else {
          // Session expired
          sessionStorage.removeItem("admin_authenticated");
          sessionStorage.removeItem("admin_auth_time");
        }
      }
    };

    checkAuth();
    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    
    // Check initial URL
    if (window.location.pathname.includes("admin") || window.location.hash === "#admin") {
      handleAccessAdmin();
    }
    
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  // Handle admin access - requires authentication
  const handleAccessAdmin = () => {
    const isAuth = sessionStorage.getItem("admin_authenticated") === "true";
    
    if (isAuth) {
      setShowAdmin(true);
      setIsAuthenticated(true);
      window.history.pushState({}, "", "/admin");
    } else {
      setShowPasswordPrompt(true);
    }
  };

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
    setShowPasswordPrompt(false);
    setShowAdmin(true);
    window.history.pushState({}, "", "/admin");
  };

  const handleExitAdmin = () => {
    setShowAdmin(false);
    window.history.pushState({}, "", "/");
  };

  const handleCancelAuth = () => {
    setShowPasswordPrompt(false);
  };

  // Debug route
  if (currentPath === "/debug" || currentPath === "/debug/") {
    return (
      <ThemeProvider>
        <div className="min-h-screen">
          <AdminDebug />
        </div>
      </ThemeProvider>
    );
  }

  // Show Admin Panel
  if (showAdmin || currentPath === "/admin" || currentPath === "/admin/") {
    return (
      <ThemeProvider>
        <div className="min-h-screen">
          <TravelAdmin onExit={handleExitAdmin} />
        </div>
      </ThemeProvider>
    );
  }

  // Main portfolio site
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <TravelHighlights />
        <Blog />
        <HireMe />
        <Contact />
        <Footer />
        <WhatsAppFloat />
        <AdminAccessButton onAccessAdmin={handleAccessAdmin} />
        {showPasswordPrompt && <AdminPasswordPrompt onAuthenticated={handleAuthenticated} onCancel={handleCancelAuth} />}
      </div>
    </ThemeProvider>
  );
}