import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Hero from './components/Hero';
import Splash from './components/Splash';
import GlobalSection from './components/GlobalSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';

// Layout Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page Components (Wrapper components)
const HomeKey = () => (
  <>
    <Hero />
    <WhyChooseUs />
    <GlobalSection />
    <Testimonials />
    <Footer />
  </>
);

const AboutPage = () => (
  <>
    <Navbar />
    <AboutSection />
    <Footer />
  </>
);

const ContactPage = () => (
  <>
    <Navbar />
    <ContactSection />
    <Footer />
  </>
);

const PortfolioPage = () => (
  <>
    <Navbar />
    <Portfolio />
    <Footer />
  </>
);

const ServicesPage = () => (
  <>
    <Navbar />
    <Services />
    <Footer />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate initial load splash only once (could use sessionStorage to persist across reloads if desired, 
  // but for now keeping it simple as per request 'every refresh')
  if (loading) {
    return <Splash onFinish={() => setLoading(false)} />;
  }

  return (
    <Router>
      <div className="app fade-in">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeKey />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* Fallback to Home */}
          <Route path="*" element={<HomeKey />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
