import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const hamburgerBtnRef = useRef(null);
    const closeBtnRef = useRef(null);
    const drawerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change during render
    const [prevPath, setPrevPath] = useState(location.pathname);
    if (prevPath !== location.pathname) {
        setPrevPath(location.pathname);
        setIsMenuOpen(false);
    }

    // Background scroll locking when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            // Focus inside the drawer when opened
            setTimeout(() => {
                closeBtnRef.current?.focus();
            }, 50);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    // Handle Escape key to close menu and return focus to hamburger button
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                e.preventDefault();
                setIsMenuOpen(false);
                hamburgerBtnRef.current?.focus();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isMenuOpen]);

    const closeMenu = () => {
        setIsMenuOpen(false);
        hamburgerBtnRef.current?.focus();
    };

    const isActive = (path) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <header className={`main-nav-header ${scrolled ? 'nav-scrolled' : ''}`}>
            <div className="nav-container container">
                <div className="logo-wrapper">
                    <Link to="/" className="brand-logo-link" aria-label="Neziz Home">
                        <img 
                            src="/images/Neziz-logo-dark.png" 
                            alt="Neziz" 
                            className="nav-brand-logo" 
                        />
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="desktop-nav-menu" aria-label="Main Navigation">
                    <Link to="/" className={`nav-item-link ${isActive('/') ? 'active' : ''}`}>
                        Home
                    </Link>
                    <Link to="/services" className={`nav-item-link ${isActive('/services') ? 'active' : ''}`}>
                        Services
                    </Link>
                    <Link to="/portfolio" className={`nav-item-link ${isActive('/portfolio') ? 'active' : ''}`}>
                        Portfolio
                    </Link>
                    <Link to="/about" className={`nav-item-link ${isActive('/about') ? 'active' : ''}`}>
                        About us
                    </Link>
                    <Link to="/contact" className={`nav-item-link ${isActive('/contact') ? 'active' : ''}`}>
                        Contact us
                    </Link>
                </nav>

                {/* Desktop CTA */}
                <div className="nav-action-wrapper desktop-cta">
                    <Link to="/contact" className="btn btn-primary btn-sm">
                        <span>Let's talk</span>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33337M12.6667 8L8.00004 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>

                {/* Mobile Hamburger Toggle */}
                <button 
                    ref={hamburgerBtnRef}
                    className={`nav-hamburger ${isMenuOpen ? 'open' : ''}`} 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-nav-drawer"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>

            {/* Mobile Drawer Menu */}
            <div 
                ref={drawerRef}
                id="mobile-nav-drawer"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                className={`mobile-nav-drawer ${isMenuOpen ? 'drawer-open' : ''}`}
            >
                <div className="mobile-drawer-inner">
                    <div className="mobile-drawer-top">
                        <img 
                            src="/images/Neziz-logo-dark.png" 
                            alt="Neziz" 
                            className="mobile-drawer-logo" 
                        />
                        <button 
                            ref={closeBtnRef}
                            className="mobile-close-btn" 
                            onClick={closeMenu}
                            aria-label="Close navigation menu"
                        >
                            &times;
                        </button>
                    </div>

                    <nav className="mobile-drawer-links" aria-label="Mobile Navigation">
                        <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>
                            Home
                        </Link>
                        <Link to="/services" className={`mobile-nav-link ${isActive('/services') ? 'active' : ''}`}>
                            Services
                        </Link>
                        <Link to="/portfolio" className={`mobile-nav-link ${isActive('/portfolio') ? 'active' : ''}`}>
                            Portfolio
                        </Link>
                        <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}>
                            About us
                        </Link>
                        <Link to="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>
                            Contact us
                        </Link>
                    </nav>

                    <div className="mobile-drawer-footer">
                        <Link to="/contact" className="btn btn-primary btn-block">
                            <span>Let's talk</span>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33337M12.6667 8L8.00004 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                        <p className="mobile-contact-hint">
                            Mamprobi, Accra • <a href="tel:0242528504">0242528504</a>
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Backdrop overlay */}
            {isMenuOpen && (
                <div 
                    className="mobile-backdrop" 
                    onClick={closeMenu}
                    aria-hidden="true"
                ></div>
            )}
        </header>
    );
};

export default Navbar;
