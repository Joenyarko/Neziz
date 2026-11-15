import React from 'react';

const GlobalSection = () => {
    return (
        <section className="section section-surface global-section">
            <div className="container">
                <div className="center-text">
                    <span className="eyebrow">GLOBAL REACH & IMPACT</span>
                    <h2 className="section-title">Rooted in Accra, <em>Operating Worldwide</em></h2>
                    <p className="section-subtitle">
                        From our technology studio in Mamprobi, Accra, we engineer and deploy digital systems that serve clients and end-users seamlessly across Africa, Europe, North America, and beyond.
                    </p>
                </div>

                <div className="global-map-card card-dark">
                    <div className="map-card-header">
                        <div className="map-badge-group">
                            <span className="map-live-pill">
                                <span className="pulse-dot"></span>
                                Global Network Active
                            </span>
                            <span className="map-hq-pill">
                                📍 HQ: Mamprobi, Accra, Ghana
                            </span>
                        </div>
                        <div className="map-clock">
                            <span>GMT / UTC Timezone</span>
                        </div>
                    </div>

                    <div className="map-visual-container">
                        <img 
                            src="/images/worldwide.png" 
                            alt="Neziz Global Network Map" 
                            className="world-map-img" 
                        />
                        
                        {/* Overlay Hub Markers */}
                        <div className="map-marker-pin pin-accra">
                            <span className="marker-pulse"></span>
                            <span className="marker-label">Accra (HQ)</span>
                        </div>
                        <div className="map-marker-pin pin-london">
                            <span className="marker-pulse"></span>
                            <span className="marker-label">Europe Hub</span>
                        </div>
                        <div className="map-marker-pin pin-us">
                            <span className="marker-pulse"></span>
                            <span className="marker-label">North America</span>
                        </div>
                    </div>

                    <div className="map-card-metrics">
                        <div className="map-metric-item">
                            <div className="metric-val">14+</div>
                            <div className="metric-lbl">Countries Reached</div>
                        </div>
                        <div className="map-metric-divider"></div>
                        <div className="map-metric-item">
                            <div className="metric-val">&lt; 2h</div>
                            <div className="metric-lbl">Critical Support SLA</div>
                        </div>
                        <div className="map-metric-divider"></div>
                        <div className="map-metric-item">
                            <div className="metric-val">99.98%</div>
                            <div className="metric-lbl">Platform Availability</div>
                        </div>
                        <div className="map-metric-divider"></div>
                        <div className="map-metric-item">
                            <div className="metric-val">100%</div>
                            <div className="metric-lbl">Cloud-Native Delivery</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalSection;
