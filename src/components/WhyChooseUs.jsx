import React from 'react';

const WhyChooseUs = () => {
    const values = [
        {
            id: 1,
            title: 'High-Stakes Technical Expertise',
            tag: 'Engineering Excellence',
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
            ),
            description: 'Our team comprises certified software engineers and systems architects with proven track records in high-throughput enterprise deployments.'
        },
        {
            id: 2,
            title: 'Bespoke Architecture, Zero Bloat',
            tag: 'Tailored Delivery',
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
            ),
            description: 'We don’t believe in one-size-fits-all. We build custom-tailored software systems that align directly with your operational requirements and long-term vision.'
        },
        {
            id: 3,
            title: 'Global Standards & Security',
            tag: 'Enterprise Hardening',
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
            ),
            description: 'Adhering to strict international code quality, zero-trust security postures, and scalable cloud-native architectures that are ready to scale globally.'
        },
        {
            id: 4,
            title: '24/7 Mission-Critical Support',
            tag: 'SLA Guaranteed',
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
            ),
            description: 'Our dedicated engineers monitor your core applications around the clock, providing proactive maintenance and immediate incident response.'
        },
        {
            id: 5,
            title: 'Actionable Intelligence & Telemetry',
            tag: 'Data Driven',
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
            ),
            description: 'Every application we craft comes instrumented with real-time analytics and telemetry so leadership can monitor KPIs with complete clarity.'
        },
        {
            id: 6,
            title: 'Agile & Transparent Collaboration',
            tag: 'Predictable Delivery',
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            ),
            description: 'Bi-weekly demo sprints, detailed documentation, direct communication channels, and clear milestone tracking with zero surprises.'
        }
    ];

    return (
        <section className="section section-surface values-section">
            <div className="container">
                <div className="center-text">
                    <span className="eyebrow">OUR CORE PRINCIPLES</span>
                    <h2 className="section-title">Why Leading Brands <em>Choose Neziz</em></h2>
                    <p className="section-subtitle">
                        We combine aesthetic refinement with enterprise-grade engineering discipline to build systems that produce real, lasting business leverage.
                    </p>
                </div>

                <div className="val-grid">
                    {values.map(val => (
                        <div key={val.id} className="val-cell">
                            <div className="val-cell-top">
                                <div className="val-icon-box">
                                    {val.icon}
                                </div>
                                <span className="val-tag">{val.tag}</span>
                            </div>
                            <h3 className="val-title">{val.title}</h3>
                            <p className="val-desc">{val.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
