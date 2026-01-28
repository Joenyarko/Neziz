import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="logo-container">
                    {/* Assuming logo is in public/images/Neziz-logo.png */}
                    <img src="/images/Neziz-logo2.png" alt="Neziz" className="logo" />
                </div>

                <nav className="nav-menu">
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#about" className="nav-link">About us</a>
                    <a href="#contact" className="nav-link">Contact us</a>
                </nav>

                <div className="cta-container">
                    <button className="cta-button">Let's talk</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
