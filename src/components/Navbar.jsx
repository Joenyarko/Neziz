import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Keyboard accessibility: Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`main-nav-header ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container container">
        <div className="logo-wrapper">
          <Link to="/" className="brand-logo-link" aria-label="Joe Nyarko Web Developer Home">
            <span className="brand-name-text">
              <strong>Joe Nyarko</strong>
              <span className="brand-title-sub">Web Developer</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav-menu" aria-label="Main navigation">
          <Link to="/" className={`nav-item-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/portfolio" className={`nav-item-link ${isActive('/portfolio') ? 'active' : ''}`}>
            Projects & Case Studies
          </Link>
          <Link to="/about" className={`nav-item-link ${isActive('/about') ? 'active' : ''}`}>
            About & Skills
          </Link>
          <Link to="/contact" className={`nav-item-link ${isActive('/contact') ? 'active' : ''}`}>
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="nav-action-wrapper desktop-cta">
          <Link to="/contact" className="btn btn-primary btn-sm" aria-label="Contact Joe Nyarko for web developer opportunities">
            <span>Get in Touch</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33337M12.6667 8L8.00004 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className={`nav-hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-drawer"
        >
          <span className="hamburger-line" aria-hidden="true"></span>
          <span className="hamburger-line" aria-hidden="true"></span>
          <span className="hamburger-line" aria-hidden="true"></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        id="mobile-nav-drawer"
        className={`mobile-nav-drawer ${isMenuOpen ? 'drawer-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-top">
            <div className="mobile-brand-title">
              <strong>Joe Nyarko</strong>
              <span className="mobile-brand-sub">Web Developer</span>
            </div>
            <button 
              className="mobile-close-btn" 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>

          <nav className="mobile-drawer-links" aria-label="Mobile navigation">
            <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/portfolio" className={`mobile-nav-link ${isActive('/portfolio') ? 'active' : ''}`}>
              Projects & Case Studies
            </Link>
            <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}>
              About & Skills
            </Link>
            <Link to="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
          </nav>

          <div className="mobile-drawer-footer">
            <Link to="/contact" className="btn btn-primary btn-block">
              <span>Contact Joe Nyarko</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33337M12.6667 8L8.00004 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <p className="mobile-contact-hint">
              Recruiter Phone: <a href="tel:+233242528504">+233 24 252 8504</a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Backdrop overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-backdrop" 
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};

export default Navbar;
