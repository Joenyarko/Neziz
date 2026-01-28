import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <Link to="/">
                        <img src="/images/Neziz-logo2.png" alt="Neziz" className="footer-logo" />
                    </Link>
                </div>

                <div className="footer-links">
                    <Link to="/services">Services</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                </div>

                <p className="copyright">&copy; {new Date().getFullYear()} Neziz Agency. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
