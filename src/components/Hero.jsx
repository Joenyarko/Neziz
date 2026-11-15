import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [activeTab, setActiveTab] = useState('invento');

    const showcaseData = {
        invento: {
            title: 'NezizInvento — Desktop Inventory & Point-of-Sale System',
            category: 'Desktop Application',
            tag: 'Offline-First Architecture',
            image: '/images/nezizinvento.jpg',
            desc: 'High-performance desktop inventory management application featuring live stock valuation, sales ledger, low-stock proactive alerts, categorized catalogs, and one-click database backups.',
            metric1: 'Live Stock Valuation Engine',
            metric2: 'Zero-Latency Offline POS',
            actionText: 'View Software Details',
            link: '/portfolio'
        },
        layby: {
            title: 'Neziz Cloud — Retail Layby & Installment Management SaaS',
            category: 'SaaS Platform',
            tag: 'Live Cloud SaaS',
            image: '/images/Neziz-mockup.png',
            desc: 'Specialized enterprise SaaS platform designed for retail layaway purchases. Automates flexible installment plans, customer ledger tracking, item holds, and automated payment reminders.',
            metric1: 'Automated Installment Schedules',
            metric2: 'Multi-Tenant Cloud Architecture',
            actionText: 'Visit Live Platform ↗',
            externalUrl: 'https://neziz.cloud/'
        },
        adroit: {
            title: 'Adroit Cloud — Enterprise Operating System',
            category: 'Enterprise Solution',
            tag: 'Enterprise Cloud',
            image: '/images/Adroit.png',
            desc: 'Unified enterprise resource planning consolidating inventory, finance, payroll, and executive telemetry into one connected system across desktop, web, and mobile.',
            metric1: '99.98% System Reliability',
            metric2: 'Unified ERP Workflows',
            actionText: 'Visit Live Site ↗',
            externalUrl: 'https://home.adroitcloud.online/'
        },
        viotor: {
            title: 'Shop Viotor — Premier Ghana & ATU Marketplace',
            category: 'Modern E-Commerce',
            tag: 'Live Marketplace',
            image: '/images/shopviotor.png',
            desc: 'Robust multi-vendor digital commerce platform built for Accra Technical University (ATU) community and Ghanaian consumers, equipped with instant Mobile Money payments and automated order fulfillment.',
            metric1: 'Mobile Money & Card Checkout',
            metric2: 'Multi-Vendor Architecture',
            actionText: 'Visit Live Marketplace ↗',
            externalUrl: 'https://www.shopviotor.com/'
        }
    };

    const currentItem = showcaseData[activeTab];

    return (
        <section className="hero-section">
            <div className="hero-glow-ambient"></div>
            
            <div className="container hero-container">
                {/* Eyebrow Badge */}
                <div className="hero-eyebrow-wrapper">
                    <div className="hero-eyebrow">
                        <span className="eyebrow-pulse-dot"></span>
                        <span className="eyebrow-tag">Neziz Agency</span>
                        <span className="eyebrow-divider">/</span>
                        <span>Enterprise Software & Digital Engineering</span>
                    </div>
                </div>

                {/* Hero Editorial Heading */}
                <h1 className="hero-h1">
                    Next Level <em>Solutions</em>,<br />
                    Engineered for Today.
                </h1>

                {/* Subtitle */}
                <p className="hero-sub">
                    We architect scalable web applications, bespoke desktop systems, and modern digital commerce platforms that empower ambitious organizations to lead their markets.
                </p>

                {/* Call-to-action buttons */}
                <div className="hero-actions">
                    <Link to="/contact" className="btn btn-primary btn-lg">
                        <span>Start Your Project</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33337M12.6667 8L8.00004 12.6667" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                    <Link to="/portfolio" className="btn btn-outline btn-lg">
                        <span>Explore Our Work</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Adroit-style Proof Strip */}
            <div className="proof-strip">
                <div className="container proof-strip-inner">
                    <div className="proof-item">
                        <span className="proof-icon">✓</span>
                        <span>Live E-Commerce & SaaS Platforms</span>
                    </div>
                    <div className="proof-separator">•</div>
                    <div className="proof-item">
                        <span className="proof-icon">✓</span>
                        <span>Mamprobi, Accra HQ to Global Delivery</span>
                    </div>
                    <div className="proof-separator">•</div>
                    <div className="proof-item">
                        <span className="proof-icon">✓</span>
                        <span>Custom Desktop & Cloud Systems</span>
                    </div>
                    <div className="proof-separator">•</div>
                    <div className="proof-item">
                        <span className="proof-icon">✓</span>
                        <span>Proven Enterprise SLA & Support</span>
                    </div>
                </div>
            </div>

            {/* Adroit-style Interactive Enterprise Showcase Window */}
            <div className="container dash-outer">
                <div className="dash-frame">
                    {/* Window Title Bar */}
                    <div className="dash-window-header">
                        <div className="dash-window-controls">
                            <span className="win-dot dot-close"></span>
                            <span className="win-dot dot-min"></span>
                            <span className="win-dot dot-max"></span>
                        </div>
                        <div className="dash-window-url">
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="6" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                                <path d="M5.5 6V4.5C5.5 3.11929 6.61929 2 8 2C9.38071 2 10.5 3.11929 10.5 4.5V6" stroke="currentColor" strokeWidth="1.2"/>
                            </svg>
                            <span>neziz.studio / verified-deployments</span>
                        </div>
                        <div className="dash-window-status">
                            <span className="status-indicator"></span>
                            <span>Live Deployments</span>
                        </div>
                    </div>

                    {/* Dashboard Body */}
                    <div className="dash-body">
                        {/* Tab Switcher */}
                        <div className="dash-tabs-bar">
                            <button 
                                className={`dash-tab-btn ${activeTab === 'invento' ? 'active' : ''}`}
                                onClick={() => setActiveTab('invento')}
                            >
                                <span className="tab-dot"></span>
                                <span>NezizInvento (Desktop)</span>
                            </button>
                            <button 
                                className={`dash-tab-btn ${activeTab === 'layby' ? 'active' : ''}`}
                                onClick={() => setActiveTab('layby')}
                            >
                                <span className="tab-dot"></span>
                                <span>Neziz Cloud (SaaS)</span>
                            </button>
                            <button 
                                className={`dash-tab-btn ${activeTab === 'adroit' ? 'active' : ''}`}
                                onClick={() => setActiveTab('adroit')}
                            >
                                <span className="tab-dot"></span>
                                <span>Adroit Cloud ERP</span>
                            </button>
                            <button 
                                className={`dash-tab-btn ${activeTab === 'viotor' ? 'active' : ''}`}
                                onClick={() => setActiveTab('viotor')}
                            >
                                <span className="tab-dot"></span>
                                <span>Shop Viotor (E-Commerce)</span>
                            </button>
                        </div>

                        {/* Interactive Showcase Preview */}
                        <div className="dash-content-grid">
                            <div className="dash-visual-preview">
                                <img 
                                    src={currentItem.image} 
                                    alt={currentItem.title} 
                                    className="dash-screenshot"
                                />
                                <div className="dash-preview-badge">
                                    <span className="badge-live-dot"></span>
                                    {currentItem.tag}
                                </div>
                            </div>

                            <div className="dash-meta-panel">
                                <span className="meta-category-badge">{currentItem.category}</span>
                                <h3 className="meta-title">{currentItem.title}</h3>
                                <p className="meta-description">{currentItem.desc}</p>
                                
                                <div className="meta-stats-row">
                                    <div className="meta-stat-box">
                                        <div className="stat-value">{currentItem.metric1}</div>
                                        <div className="stat-label">Core Architecture</div>
                                    </div>
                                    <div className="meta-stat-box">
                                        <div className="stat-value">{currentItem.metric2}</div>
                                        <div className="stat-label">Operational Impact</div>
                                    </div>
                                </div>

                                <div className="meta-cta-row">
                                    {currentItem.externalUrl ? (
                                        <a 
                                            href={currentItem.externalUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="btn btn-primary btn-sm"
                                        >
                                            {currentItem.actionText}
                                        </a>
                                    ) : (
                                        <Link to={currentItem.link || '/portfolio'} className="btn btn-primary btn-sm">
                                            {currentItem.actionText}
                                        </Link>
                                    )}
                                    <Link to="/contact" className="btn btn-ghost btn-sm">
                                        Request Similar Solution
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
