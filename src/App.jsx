import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import GlobalSection from './components/GlobalSection';
import Testimonials from './components/Testimonials';
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

// Home Page: Flagship experience
const HomePage = () => (
  <>
    <Hero />
    <WhyChooseUs />
    <Services />
    <Portfolio />
    <GlobalSection />
    <Testimonials />
    <CtaBanner />
  </>
);

// Inner Pages with consistent CTA
const AboutPage = () => (
  <>
    <AboutSection />
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
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Splash onFinish={() => setLoading(false)} />;
  }

  return (
    <Router>
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
