import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import GlobalSection from './components/GlobalSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import TeamTeaser from './components/TeamTeaser';
import ContactSection from './components/ContactSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import Splash from './components/Splash';
import NotFound from './components/NotFound';
import SEO from './components/SEO';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import PrivacyPage from './pages/PrivacyPage';
import SecurityPage from './pages/SecurityPage';

// Helper to scroll to top or hash target on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

// Home Page: Flagship experience with team teaser
const HomePage = () => (
  <>
    <Hero />
    <WhyChooseUs />
    <Services />
    <Portfolio />
    <TeamTeaser />
    <GlobalSection />
    <CtaBanner />
  </>
);

// Inner Pages
const AboutPage = () => (
  <>
    <AboutSection />
    <TeamSection />
    <GlobalSection />
    <CtaBanner />
  </>
);

const ServicesPage = () => (
  <>
    <Services />
    <WhyChooseUs />
    <CtaBanner />
  </>
);

const PortfolioPage = () => (
  <>
    <Portfolio />
    <CtaBanner />
  </>
);

const ContactPage = () => (
  <>
    <ContactSection />
  </>
);

function App() {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.search.includes('no_splash')) return false;
      if (sessionStorage.getItem('neziz_has_visited')) return false;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    }
    return true;
  });

  const handleFinish = () => {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('neziz_has_visited', 'true');
      } catch {
        // Ignore storage exceptions in restricted environments
      }
    }
    setLoading(false);
  };

  if (loading) {
    return <Splash onFinish={handleFinish} />;
  }

  return (
    <Router>
      <SEO />
      <div className="app-shell fade-in">
        <ScrollToTop />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/security" element={<SecurityPage />} />
            {/* 404 Not Found for unknown paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
