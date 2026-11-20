import React, { useEffect, useState } from 'react';

const Splash = ({ onFinish }) => {
    const [fading, setFading] = useState(false);

    useEffect(() => {
        // Immediate bypass for testing or users preferring reduced motion
        if (typeof window !== 'undefined' && (
            window.location.search.includes('no_splash') || 
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        )) {
            onFinish();
            return;
        }

        const timer = setTimeout(() => {
            setFading(true);
            setTimeout(() => {
                onFinish();
            }, 300);
        }, 800);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={`splash-screen ${fading ? 'fade-out' : ''}`}>
            <div className="splash-content-box">
                <img 
                    src="/images/Neziz-logo-dark.png" 
                    alt="Neziz" 
                    className="splash-logo" 
                />
                <div className="splash-loader-bar">
                    <div className="splash-loader-progress"></div>
                </div>
                <span className="splash-tagline">Websites • Web Applications • Online Stores</span>
            </div>
        </div>
    );
};

export default Splash;
