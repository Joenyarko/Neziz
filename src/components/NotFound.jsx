import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="section not-found-section" aria-label="Page Not Found">
            <div className="container center-text" style={{ padding: '80px 24px', maxWidth: '640px', margin: '0 auto' }}>
                <span className="eyebrow" style={{ color: 'var(--primary, #E02424)' }}>404 ERROR</span>
                <h1 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 48px)', margin: '16px 0' }}>
                    Page Not <em>Found</em>
                </h1>
                <p className="section-subtitle" style={{ fontSize: '16px', color: 'var(--muted, #4B5563)', marginBottom: '32px' }}>
                    The page you are looking for does not exist, has been removed, or has moved to a new address.
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/" className="btn btn-primary btn-lg">
                        <span>Return Home</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33337M12.6667 8L8.00004 12.6667" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                    <Link to="/contact" className="btn btn-outline btn-lg">
                        <span>Contact Us</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;

