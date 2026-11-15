import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="main-footer">
            <div className="container footer-container">
                <div className="footer-top-grid">
                    {/* Brand Col */}
                    <div className="footer-brand-col">
                        <Link to="/" className="footer-logo-link" aria-label="Neziz Home">
                            <img 
                                src="/images/Neziz-logo2.png" 
                                alt="Neziz" 
                                className="footer-brand-logo" 
                            />
                        </Link>
                        <p className="footer-tagline">
                            Bespoke enterprise software, custom cloud applications, and modern digital platforms for forward-thinking organizations worldwide.
                        </p>
                        <div className="footer-location-badge">
                            <span>📍 Mamprobi, Accra, Ghana</span>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="footer-nav-col">
                        <h4 className="footer-col-header">Services</h4>
                        <ul className="footer-links-list">
                            <li><Link to="/services">Modern E-Commerce</Link></li>
                            <li><Link to="/services">Desktop & POS Applications</Link></li>
                            <li><Link to="/services">SaaS & Cloud Portals</Link></li>
                            <li><Link to="/services">NGO & Web Platforms</Link></li>
                            <li><Link to="/services">Enterprise IT Support</Link></li>
                        </ul>
                    </div>

                    <div className="footer-nav-col">
                        <h4 className="footer-col-header">Featured Work</h4>
                        <ul className="footer-links-list">
                            <li><Link to="/portfolio">NezizInvento (Desktop)</Link></li>
                            <li><a href="https://neziz.cloud/" target="_blank" rel="noopener noreferrer">Neziz Cloud (SaaS)</a></li>
                            <li><a href="https://www.shopviotor.com/" target="_blank" rel="noopener noreferrer">Shop Viotor (ATU)</a></li>
                            <li><a href="https://home.adroitcloud.online/" target="_blank" rel="noopener noreferrer">Adroit Cloud ERP</a></li>
                            <li><a href="https://www.radianttrust.org/" target="_blank" rel="noopener noreferrer">Radiant Trust RTI</a></li>
                        </ul>
                    </div>

                    <div className="footer-nav-col">
                        <h4 className="footer-col-header">Company</h4>
                        <ul className="footer-links-list">
                            <li><Link to="/about">About Neziz</Link></li>
                            <li><Link to="/#values">Our Values</Link></li>
                            <li><Link to="/contact">Get in Touch</Link></li>
                            <li><a href="mailto:joenyarko2001@gmail.com">Direct Email</a></li>
                            <li><a href="tel:0242528504">Call: 0242528504</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Legal Bar */}
                <div className="footer-bottom-bar">
                    <p className="copyright-text">
                        &copy; {currentYear} Neziz Agency. All rights reserved. Built with precision for modern enterprises.
                    </p>
                    <div className="footer-bottom-links">
                        <Link to="/about">Privacy</Link>
                        <span className="dot-divider">•</span>
                        <Link to="/about">Security</Link>
                        <span className="dot-divider">•</span>
                        <Link to="/contact">Support</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
