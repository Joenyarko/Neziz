import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            id: 1,
            badge: 'Frontend & Platforms',
            title: 'Web Design & Web Applications',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
            ),
            description: 'Stunning, high-converting digital storefronts, corporate websites, and interactive client portals tailored to establish your authority in your industry.',
            deliverables: ['Custom UI/UX Systems', 'React & Next.js Performance', 'Micro-Interactions', 'SEO & Core Web Vitals']
        },
        {
            id: 2,
            badge: 'Enterprise Architecture',
            title: 'Bespoke Software & Cloud Portals',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                    <polyline points="2 17 12 22 22 17"/>
                    <polyline points="2 12 12 17 22 12"/>
                </svg>
            ),
            description: 'Scalable internal business tools, ERP integrations, customer dashboards, and workflow automation platforms built to eliminate manual bottlenecks.',
            deliverables: ['Cloud Database Architecture', 'Role-Based Access Control', 'REST & GraphQL APIs', 'Real-Time Sync']
        },
        {
            id: 3,
            badge: 'Infrastructure & DevOps',
            title: 'Enterprise IT Solutions & Support',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                    <line x1="6" y1="6" x2="6.01" y2="6"/>
                    <line x1="6" y1="18" x2="6.01" y2="18"/>
                </svg>
            ),
            description: 'Reliable engineering support, server management, security hardening, and database optimization to keep mission-critical operations operating without downtime.',
            deliverables: ['Cloud Migration & Setup', '24/7 SLA Monitoring', 'Automated Backups', 'Zero-Downtime Deploys']
        },
        {
            id: 4,
            badge: 'Business Intelligence',
            title: 'Data Analytics & Reporting Systems',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
                    <path d="M22 12A10 10 0 0 0 12 2v10z"/>
                </svg>
            ),
            description: 'Turn disparate spreadsheets and transactional records into automated executive dashboards, operational KPIs, and predictive business intelligence.',
            deliverables: ['Custom BI Dashboards', 'FinTech Bank Reconciliation', 'Financial Auditing Tools', 'Automated Export Pipelines']
        },
        {
            id: 5,
            badge: 'Digital Commerce',
            title: 'Modern E-Commerce Systems',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
            ),
            description: 'High-conversion checkout flows, multi-currency support, mobile money & Stripe integrations, and automated inventory sync built for high sales volumes.',
            deliverables: ['Local & Global Gateways', 'Inventory Management', 'Customer Portals', 'Automated Receipts & Invoices']
        },
        {
            id: 6,
            badge: 'Growth & Strategy',
            title: 'Digital Marketing & Brand Presence',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
            ),
            description: 'Amplify market visibility and customer acquisition through search engine optimization, content strategy, targeted campaigns, and conversion rate optimization.',
            deliverables: ['Technical & On-Page SEO', 'Conversion Rate Audit', 'Social Media Strategy', 'Email Lead Nurturing']
        }
    ];

    return (
        <section className="section services-section">
            <div className="container">
                <div className="center-text">
                    <span className="eyebrow">WHAT WE DELIVER</span>
                    <h2 className="section-title">Comprehensive Capabilities for <em>Modern Brands</em></h2>
                    <p className="section-subtitle">
                        From cloud infrastructure to bespoke web portals and automated intelligence, we engineer solutions that streamline operations and accelerate sustainable growth.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map(service => (
                        <div key={service.id} className="service-card card card-hover">
                            <div className="service-card-top">
                                <div className="service-icon-box">
                                    {service.icon}
                                </div>
                                <span className="service-badge-pill">{service.badge}</span>
                            </div>

                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>

                            <div className="service-deliverables">
                                <div className="deliverable-label">Key Capabilities:</div>
                                <ul className="deliverables-list">
                                    {service.deliverables.map((item, idx) => (
                                        <li key={idx}>
                                            <span className="check-bullet">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="service-card-footer">
                                <Link to="/contact" className="service-action-link">
                                    <span>Discuss your requirement</span>
                                    <span className="link-arrow">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Adroit-style Feature Split / Callout Banner */}
                <div className="services-callout-card">
                    <div className="callout-content">
                        <span className="eyebrow eyebrow-blue">CONSULTATIVE APPROACH</span>
                        <h3 className="callout-title">Need a custom technical roadmap?</h3>
                        <p className="callout-desc">
                            We offer tailored technical audits and architecture consultations for companies scaling their digital footprint or modernizing legacy infrastructure.
                        </p>
                    </div>
                    <div className="callout-action">
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            <span>Book Technical Consultation</span>
                            <span className="btn-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
