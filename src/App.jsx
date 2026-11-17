import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Core Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import CaseStudyDetail from './components/CaseStudyDetail';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import Splash from './components/Splash';

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Home Page: Web Developer Positioning & Candidate Evidence
const HomePage = () => (
  <>
    <Hero />
    <Portfolio />
    <AboutSection />
    <ContactSection />
    <CtaBanner />
  </>
);

// Dedicated Case Studies & Projects Listing
const PortfolioPage = () => (
  <>
    <Portfolio />
    <CtaBanner />
  </>
);

// Individual Project Case Study Page
const CaseStudyPage = () => (
  <>
    <CaseStudyDetail />
    <CtaBanner />
  </>
);

// About & Skills Page
const AboutPage = () => (
  <>
    <AboutSection />
    <CtaBanner />
  </>
);

// Contact Page
const ContactPage = () => (
  <>
    <ContactSection />
  </>
);

function App() {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.search.includes('no_splash')) return false;
      if (sessionStorage.getItem('joe_has_visited')) return false;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    }
    return true;
  });

  const handleFinish = () => {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('joe_has_visited', 'true');
      } catch (e) {}
    }
    setLoading(false);
  };

  if (loading) {
    return <Splash onFinish={handleFinish} />;
  }

  return (
    <Router>
      <div className="app-shell fade-in">
        <ScrollToTop />
        <Navbar />
        <main id="main-content" className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:id" element={<CaseStudyPage />} />
            <Route path="/projects" element={<PortfolioPage />} />
            <Route path="/projects/:id" element={<CaseStudyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
