import React, { useEffect, useState } from 'react';


const Splash = ({ onFinish }) => {
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFading(true);
            setTimeout(() => {
                onFinish();
            }, 800);
        }, 2200);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={`splash-screen ${fading ? 'fade-out' : ''}`}>
            {/* Loader line optional, keeping it subtle at bottom or removing if it distracts from image */}
            <div className="loader-line"></div>
        </div>
    );
};

export default Splash;
