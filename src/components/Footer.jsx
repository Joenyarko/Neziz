import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer" aria-label="Footer">
      <div className="container footer-container">
        <div className="footer-top-grid">
          {/* Brand & Positioning Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link" aria-label="Joe Nyarko Web Developer Home">
              <span className="footer-brand-title">Joe Nyarko</span>
            </Link>
            <p className="footer-tagline">
              Web developer building client websites and web applications using HTML, CSS, React, PHP, and MySQL. Open to web development opportunities.
            </p>
            <div className="footer-location-badge">
              <span>📍 Mamprobi, Accra, Ghana</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-nav-col">
            <h3 className="footer-col-header">Navigation</h3>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Projects & Case Studies</Link></li>
              <li><Link to="/about">About & Technical Skills</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Selected Work Column */}
          <div className="footer-nav-col">
            <h3 className="footer-col-header">Candidate Case Studies</h3>
            <ul className="footer-links-list">
              <li><Link to="/portfolio/shop-viotor">Shop Viotor (E-Com)</Link></li>
              <li><Link to="/portfolio/wiloty-foundation">Wiloty Foundation (NGO)</Link></li>
              <li><Link to="/portfolio/nezizinvento">NezizInvento (Desktop)</Link></li>
              <li><Link to="/portfolio/adroit-bureau">Adroit Bureau (Website)</Link></li>
              <li><Link to="/portfolio/bank-recon-prototype">Bank Recon (Prototype)</Link></li>
            </ul>
          </div>

          {/* Direct Recruiter Contact Column */}
          <div className="footer-nav-col">
            <h3 className="footer-col-header">Recruiter Contact</h3>
            <ul className="footer-links-list">
              <li>
                <a href="tel:+233242528504" aria-label="Call primary recruiter phone: +233242528504">
                  Primary: +233 24 252 8504
                </a>
              </li>
              <li>
                <a href="tel:+233501354521" aria-label="Call alternate phone: +233501354521">
                  Alt: +233 50 135 4521
                </a>
              </li>
              <li>
                <a href="mailto:joenyarko2001@gmail.com" aria-label="Email joenyarko2001@gmail.com">
                  joenyarko2001@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/joenyarko/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit Joe Nyarko's verified LinkedIn profile (opens in new tab)"
                >
                  LinkedIn Profile ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {currentYear} Joe Nyarko. Web developer portfolio prepared for job applications.
          </p>
          <div className="footer-bottom-links">
            <Link to="/portfolio">Portfolio</Link>
            <span className="dot-divider" aria-hidden="true">•</span>
            <Link to="/about">Skills & Background</Link>
            <span className="dot-divider" aria-hidden="true">•</span>
            <Link to="/contact">Get in Touch</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
