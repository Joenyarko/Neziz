import React, { useEffect, useState } from 'react';

const Splash = ({ onFinish }) => {
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFading(true);
            setTimeout(() => {
                onFinish();
            }, 600);
        }, 1500);

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
                <span className="splash-tagline">Next Level Solutions • Enterprise Engineering</span>
            </div>
        </div>
    );
};

export default Splash;
