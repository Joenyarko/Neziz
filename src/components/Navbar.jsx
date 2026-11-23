import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getWhatsAppHref, CONTACT_INFO } from '../data/contactInfo';

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

            {/* Mobile Navigation Overlay Container (clips offscreen drawer to prevent canvas expansion) */}
            <div 
                className={`mobile-nav-overlay ${isMenuOpen ? 'overlay-open' : ''}`}
                aria-hidden={!isMenuOpen}
            >
                <div 
                    className="mobile-backdrop" 
                    onClick={closeMenu}
                    aria-hidden="true"
                ></div>

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
                            <a 
                                href={getWhatsAppHref()} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-whatsapp btn-block"
                                style={{ marginBottom: '10px' }}
                                aria-label="Message Neziz on WhatsApp"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                <span>Message on WhatsApp</span>
                            </a>
                            <Link to="/contact" className="btn btn-outline btn-block">
                                <span>Let's talk</span>
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33337M12.6667 8L8.00004 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                            <p className="mobile-contact-hint">
                                Mamprobi, Accra • <a href="tel:0242528504">024 252 8504</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
