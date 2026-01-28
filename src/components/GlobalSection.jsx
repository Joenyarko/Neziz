import React from 'react';


const GlobalSection = () => {
    return (
        <section className="global-section">
            <div className="container">
                <div className="global-header">
                    <span className="global-badge">WE ARE GLOBAL</span>
                    {/* Title removed as it's in the image */}
                </div>

                <div className="map-container">
                    <img src="/images/worldwide.png" alt="Global Presence" className="world-map-img" />
                </div>
            </div>
        </section>
    );
};

export default GlobalSection;
