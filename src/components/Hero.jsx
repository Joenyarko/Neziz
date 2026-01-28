import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>

            {/* Top Bar */}
            <div className="hero-top-bar container">
                <div className="logo-wrapper">
                    <Link to="/">
                        <img src="/images/Neziz-logo2.png" alt="Neziz" className="hero-logo" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hero-nav desktop-nav">
                    <Link to="/services" className="hero-link">Services</Link>
                    <Link to="/portfolio" className="hero-link">Portfolio</Link>
                    <Link to="/about" className="hero-link">About us</Link>
                    <Link to="/contact" className="hero-link">Contact us</Link>
                </nav>

                <div className="hero-cta-wrapper desktop-cta">
                    <Link to="/contact"><button className="gold-cta">Let's talk</button></Link>
                </div>

                {/* Hamburger Button (Mobile/Tablet) */}
                <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
                <nav className="mobile-nav">
                    <Link to="/services" className="mobile-link" onClick={toggleMenu}>Services</Link>
                    <Link to="/portfolio" className="mobile-link" onClick={toggleMenu}>Portfolio</Link>
                    <Link to="/about" className="mobile-link" onClick={toggleMenu}>About us</Link>
                    <Link to="/contact" className="mobile-link" onClick={toggleMenu}>Contact us</Link>
                    <Link to="/contact" className="gold-cta mobile-menu-cta" onClick={toggleMenu}>Let's talk</Link>
                </nav>
            </div>

            {/* Main Center Content */}
            <div className="hero-content container">
                <h1 className="hero-title">
                    Next Level Solutions,<br /> Today!
                </h1>
                <p className="hero-subtitle">
                    Innovative Digital Service For A Modern World.
                </p>
                <div className="hero-actions">
                    <Link to="/contact">
                        <button className="main-cta">
                            Let's talk <span className="arrow">&gt;</span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
