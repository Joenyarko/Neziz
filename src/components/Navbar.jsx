import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="hero-top-bar container" style={{ position: 'sticky', top: 0, background: '#030305', zIndex: 100, paddingBottom: '1rem' }}>
                <div className="logo-wrapper">
                    <Link to="/">
                        <img src="/images/Neziz-logo2.png" alt="Neziz" className="hero-logo" style={{ height: '80px' }} />
                    </Link>
                </div>

                <nav className="hero-nav desktop-nav">
                    <Link to="/services" className="hero-link">Services</Link>
                    <Link to="/portfolio" className="hero-link">Portfolio</Link>
                    <Link to="/about" className="hero-link">About us</Link>
                    <Link to="/contact" className="hero-link">Contact us</Link>
                </nav>

                <div className="hero-cta-wrapper desktop-cta">
                    <Link to="/contact"><button className="gold-cta">Let's talk</button></Link>
                </div>

                <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>

            <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
                <nav className="mobile-nav">
                    <Link to="/services" className="mobile-link" onClick={toggleMenu}>Services</Link>
                    <Link to="/portfolio" className="mobile-link" onClick={toggleMenu}>Portfolio</Link>
                    <Link to="/about" className="mobile-link" onClick={toggleMenu}>About us</Link>
                    <Link to="/contact" className="mobile-link" onClick={toggleMenu}>Contact us</Link>
                    <Link to="/contact" onClick={toggleMenu}><button className="gold-cta mobile-menu-cta">Let's talk</button></Link>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
