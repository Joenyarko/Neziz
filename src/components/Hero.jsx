import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [activeTab, setActiveTab] = useState('erp');

    const showcaseData = {
        erp: {
            title: 'Adroit Enterprise ERP & Cloud Systems',
            category: 'Enterprise Solution',
            tag: 'Cloud Architecture',
            image: '/images/Adroit.png',
            desc: 'Unified enterprise resource planning consolidating inventory, finance, and operational workflows into a real-time command center.',
            metric1: '99.98% System Uptime',
            metric2: '45% Faster Processing'
        },
        recon: {
            title: 'AI Bank Reconciliation & FinTech Core',
            category: 'FinTech Automation',
            tag: 'Automated Ledger',
            image: '/images/Bankrecon.png',
            desc: 'Automated financial reconciliation engine matching thousands of banking transactions with zero discrepancies.',
            metric1: '100% Audit-Ready',
            metric2: '10x Faster Reconciliations'
        },
        analytics: {
            title: 'Enterprise Business Intelligence & Analytics',
            category: 'Data Optimization',
            tag: 'Real-Time Insights',
            image: '/images/B.A.png',
            desc: 'High-throughput analytics engine delivering actionable forecasting and customer intelligence dashboards.',
            metric1: 'Live Telemetry',
            metric2: '+38% Decision Accuracy'
        },
        ecom: {
            title: 'Scalable Commerce & Portal Infrastructure',
            category: 'Web Applications',
            tag: 'Digital Retail',
            image: '/images/ECOM.png',
            desc: 'Modern commerce architecture with high conversion checkouts, inventory synchronisation, and payment gateway routing.',
            metric1: '< 80ms Latency',
            metric2: 'Global Payment Ready'
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
                    We architect scalable web applications, bespoke enterprise systems, and high-performance digital platforms that empower ambitious organizations to lead their markets.
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
                        <span>Explore Portfolio</span>
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
                        <span>Enterprise Clean Architecture</span>
                    </div>
                    <div className="proof-separator">•</div>
                    <div className="proof-item">
                        <span className="proof-icon">✓</span>
                        <span>Mamprobi, Accra HQ to Global Delivery</span>
                    </div>
                    <div className="proof-separator">•</div>
                    <div className="proof-item">
                        <span className="proof-icon">✓</span>
                        <span>99.9% Production SLA & Reliability</span>
                    </div>
                    <div className="proof-separator">•</div>
                    <div className="proof-item">
                        <span className="proof-icon">✓</span>
                        <span>Low-Code & Bespoke Full-Stack Systems</span>
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
                            <span>neziz.studio / enterprise-solutions</span>
                        </div>
                        <div className="dash-window-status">
                            <span className="status-indicator"></span>
                            <span>Live Production</span>
                        </div>
                    </div>

                    {/* Dashboard Body */}
                    <div className="dash-body">
                        {/* Tab Switcher */}
                        <div className="dash-tabs-bar">
                            <button 
                                className={`dash-tab-btn ${activeTab === 'erp' ? 'active' : ''}`}
                                onClick={() => setActiveTab('erp')}
                            >
                                <span className="tab-dot"></span>
                                <span>Adroit Enterprise ERP</span>
                            </button>
                            <button 
                                className={`dash-tab-btn ${activeTab === 'recon' ? 'active' : ''}`}
                                onClick={() => setActiveTab('recon')}
                            >
                                <span className="tab-dot"></span>
                                <span>FinTech Reconciliation</span>
                            </button>
                            <button 
                                className={`dash-tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
                                onClick={() => setActiveTab('analytics')}
                            >
                                <span className="tab-dot"></span>
                                <span>Business Analytics</span>
                            </button>
                            <button 
                                className={`dash-tab-btn ${activeTab === 'ecom' ? 'active' : ''}`}
                                onClick={() => setActiveTab('ecom')}
                            >
                                <span className="tab-dot"></span>
                                <span>Digital Commerce</span>
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
                                        <div className="stat-label">Performance Benchmark</div>
                                    </div>
                                    <div className="meta-stat-box">
                                        <div className="stat-value">{currentItem.metric2}</div>
                                        <div className="stat-label">Operational Impact</div>
                                    </div>
                                </div>

                                <div className="meta-cta-row">
                                    <Link to="/portfolio" className="btn btn-outline btn-sm">
                                        View Case Details →
                                    </Link>
                                    <Link to="/contact" className="btn btn-ghost btn-sm">
                                        Request Similar Build
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
