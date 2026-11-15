import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [activeModalProject, setActiveModalProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Adroit IT Solutions & Cloud ERP',
            category: 'IT Solutions',
            tag: 'Enterprise Architecture',
            image: '/images/Adroit.png',
            desc: 'Comprehensive multi-tenant ERP platform consolidating payroll, finance, inventory tracking, and executive telemetry into one unified command center.',
            stack: ['React', 'Enterprise Cloud', 'Modular ERP', 'REST APIs'],
            impact: 'Reduced manual administrative overhead by 48% across multi-branch enterprise operations.'
        },
        {
            id: 2,
            title: 'AI Bank Reconciliation System',
            category: 'FinTech',
            tag: 'FinTech Automation',
            image: '/images/Bankrecon.png',
            desc: 'High-precision automated ledger and bank reconciliation engine designed to match thousands of daily transactions with zero variance.',
            stack: ['FinTech Automation', 'Audit Trails', 'PDF/CSV Parsers', 'Data Integrity'],
            impact: 'Accelerated month-end financial reconciliations from 6 business days to under 45 minutes.'
        },
        {
            id: 3,
            title: 'Enterprise Business Analytics',
            category: 'Data Analytics',
            tag: 'Business Intelligence',
            image: '/images/B.A.png',
            desc: 'Advanced telemetry dashboards and KPI visualization platform empowering executive leadership with real-time operational metrics and revenue forecasting.',
            stack: ['Data Visualization', 'Interactive Charts', 'Forecasting', 'Export Engine'],
            impact: 'Provided leadership with real-time visibility across 12 core performance metrics.'
        },
        {
            id: 4,
            title: 'Custom Web Application Portal',
            category: 'Web Applications',
            tag: 'Cloud Workflow',
            image: '/images/Webapp.png',
            desc: 'Scalable and robust customer-facing web application engineered for rapid user onboarding, authenticated workflows, and high transaction volume.',
            stack: ['Custom React App', 'Auth & Security', 'Modern UI/UX', 'Cloud Hosted'],
            impact: 'Increased customer engagement and direct self-service adoption by 64%.'
        },
        {
            id: 5,
            title: 'Modern E-Commerce Infrastructure',
            category: 'E-Commerce',
            tag: 'Digital Retail',
            image: '/images/ECOM.png',
            desc: 'Full-featured online retail ecosystem equipped with instant mobile money / card checkout, live stock alerts, and automated shipping calculators.',
            stack: ['Payment Gateway', 'Inventory Sync', 'Mobile-First UX', 'Automated Invoicing'],
            impact: 'Achieved 99.9% uptime during peak holiday sales traffic with zero checkout abandonment crashes.'
        },
        {
            id: 6,
            title: 'Willies Executive Brand & Portfolio',
            category: 'Web Applications',
            tag: 'Executive Platform',
            image: '/images/willies.png',
            desc: 'Bespoke, lightning-fast digital portfolio crafted for a prominent industry leader, designed to showcase achievements and drive client partnerships.',
            stack: ['Responsive Showcase', 'Fast SSR', 'Custom Typography', 'SEO Optimized'],
            impact: 'Generated 3x increase in high-tier consulting inquiries within 60 days of launch.'
        },
        {
            id: 7,
            title: 'R&R Non-Governmental Organization',
            category: 'Web Applications',
            tag: 'Non-Profit Platform',
            image: '/images/r&r.png',
            desc: 'High-impact digital advocacy platform designed to communicate NGO initiatives, organize global donation drives, and publish field impact stories.',
            stack: ['Donation Pipeline', 'Media Center', 'Community Updates', 'Global CDN'],
            impact: 'Expanded outreach to international donors across 8 countries within first quarter.'
        }
    ];

    const categories = ['All', 'IT Solutions', 'FinTech', 'Web Applications', 'Data Analytics', 'E-Commerce'];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section className="section portfolio-section">
            <div className="container">
                <div className="center-text">
                    <span className="eyebrow">OUR PROVEN WORK</span>
                    <h2 className="section-title">Engineered with Purpose, <em>Built for Scale</em></h2>
                    <p className="section-subtitle">
                        Explore our track record of enterprise platforms, financial automation systems, and high-performance digital products built for ambitious organizations.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="portfolio-filter-bar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="portfolio-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="project-card card card-hover">
                            <div className="project-visual-wrapper">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="project-main-image"
                                />
                                <div className="project-badge-overlay">
                                    <span className="badge badge-gray">{project.tag}</span>
                                </div>
                                <button 
                                    className="project-expand-btn"
                                    onClick={() => setActiveModalProject(project)}
                                    aria-label={`View details of ${project.title}`}
                                >
                                    <span>Quick Overview</span>
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 2H14V6M14 2L8 8M6 14H2V10M2 14L8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>

                            <div className="project-body">
                                <div className="project-meta-top">
                                    <span className="project-category-text">{project.category}</span>
                                </div>
                                <h3 className="project-heading">{project.title}</h3>
                                <p className="project-description">{project.desc}</p>

                                <div className="project-impact-box">
                                    <span className="impact-icon">📈</span>
                                    <span className="impact-text">{project.impact}</span>
                                </div>

                                <div className="project-tech-tags">
                                    {project.stack.map((t, i) => (
                                        <span key={i} className="tech-pill">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Callout banner */}
                <div className="portfolio-cta-banner">
                    <div className="cta-banner-text">
                        <h3>Have a visionary project in mind?</h3>
                        <p>We work with early-stage founders to established enterprises worldwide.</p>
                    </div>
                    <Link to="/contact" className="btn btn-primary btn-lg">
                        <span>Schedule a Project Discovery</span>
                        <span className="btn-arrow">→</span>
                    </Link>
                </div>
            </div>

            {/* Quick Overview Modal */}
            {activeModalProject && (
                <div className="project-modal-backdrop" onClick={() => setActiveModalProject(null)}>
                    <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="modal-close-btn" 
                            onClick={() => setActiveModalProject(null)}
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                        
                        <div className="modal-image-frame">
                            <img src={activeModalProject.image} alt={activeModalProject.title} />
                        </div>

                        <div className="modal-details">
                            <span className="badge badge-blue">{activeModalProject.category}</span>
                            <h2 className="modal-title">{activeModalProject.title}</h2>
                            <p className="modal-desc">{activeModalProject.desc}</p>
                            
                            <div className="modal-impact-highlight">
                                <strong>Demonstrated Impact:</strong> {activeModalProject.impact}
                            </div>

                            <div className="modal-tech-stack">
                                <strong>Technologies & Architecture:</strong>
                                <div className="tech-pill-row">
                                    {activeModalProject.stack.map((item, idx) => (
                                        <span key={idx} className="tech-pill">{item}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-actions">
                                <Link to="/contact" className="btn btn-primary" onClick={() => setActiveModalProject(null)}>
                                    Request Similar Implementation
                                </Link>
                                <button className="btn btn-outline" onClick={() => setActiveModalProject(null)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
