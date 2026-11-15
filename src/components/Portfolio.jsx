import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [activeModalProject, setActiveModalProject] = useState(null);

    const projects = [
        // 1. SaaS & Desktop Applications
        {
            id: 1,
            title: 'NezizInvento — Desktop Inventory & Point-of-Sale System',
            category: 'SaaS & Desktop Apps',
            tag: 'Desktop Software',
            image: '/images/nezizinvento.jpg',
            url: null,
            desc: 'Bespoke offline-first desktop inventory and sales terminal designed for fast-paced retail environments. Features real-time stock valuation, low stock warning telemetry, categorized sales logs, and local backup capability.',
            stack: ['Desktop Application', 'Local Database', 'Offline-First POS', 'Stock Telemetry'],
            impact: 'Zero-latency sales and inventory tracking with full offline resilience during network outages.'
        },
        {
            id: 2,
            title: 'Neziz Cloud — Retail Layby & Installment Management SaaS',
            category: 'SaaS & Desktop Apps',
            tag: 'Live Cloud SaaS',
            image: '/images/Neziz-mockup.png',
            url: 'https://neziz.cloud/',
            desc: 'Specialized enterprise SaaS platform designed for retail layaway purchases. Automates flexible installment plans, customer ledger tracking, item holds, and automated payment reminders for retail merchants.',
            stack: ['Cloud SaaS', 'Multi-Tenant', 'Payment Schedules', 'Merchant Portal'],
            impact: 'Enables retail merchants to increase customer order volume and automate installment reconciliation.'
        },

        // 2. Modern E-Commerce
        {
            id: 3,
            title: 'Shop Viotor — Premier Ghana & ATU Marketplace',
            category: 'E-Commerce',
            tag: 'Live Marketplace',
            image: '/images/shopviotor.png',
            url: 'https://www.shopviotor.com/',
            desc: 'Premier Ghanaian multi-vendor digital commerce marketplace built for the Accra Technical University (ATU) community and Ghanaian consumers, equipped with instant Mobile Money & card checkout and automated vendor dispatch.',
            stack: ['Multi-Vendor Architecture', 'Mobile Money Pay', 'Vendor Dashboard', 'Cart & Order Routing'],
            impact: 'Connects hundreds of student entrepreneurs with seamless campus and nationwide delivery.'
        },
        {
            id: 4,
            title: 'Embryan — Best Electronics & Hardware in Ghana',
            category: 'E-Commerce',
            tag: 'Live Storefront',
            image: '/images/ECOM.png',
            url: 'https://embryanitsolutions.site/',
            desc: 'High-conversion digital retail platform for premium consumer electronics, computing hardware, and accessories in Ghana with automated invoicing, secure cart checkout, and product filtering.',
            stack: ['Modern E-Commerce', 'Ghana Payment Gateway', 'Catalog Filtering', 'Cart Systems'],
            impact: 'Streamlined online purchasing and automated invoicing for electronics buyers across Ghana.'
        },

        // 3. Web Applications
        {
            id: 5,
            title: 'SappCloud — Free Microsoft SQL Teaching Sessions',
            category: 'Web Applications',
            tag: 'Learning Platform',
            image: '/images/B.A.png',
            url: 'https://sappcloud.net/',
            desc: 'Interactive cloud educational platform and technical resource hub providing structured Microsoft SQL Server training, database administration coursework, student sessions, and technical community management.',
            stack: ['Cloud Web Application', 'SQL Training Modules', 'Student Portal', 'Community Hub'],
            impact: 'Empowers hundreds of aspiring data professionals and students with free, high-caliber SQL training.'
        },

        // 4. NGO & Non-Profit
        {
            id: 6,
            title: 'Radiant Trust International (RTI) — Social Enterprise & NGO',
            category: 'NGO & Non-Profit',
            tag: 'Humanitarian NGO',
            image: '/images/radianttrust.png',
            url: 'https://www.radianttrust.org/',
            desc: 'Ghanaian social enterprise and humanitarian non-governmental organization driving community empowerment, youth vocational training, vulnerable outreach, and sustainable social welfare programs across Ghana.',
            stack: ['Advocacy Web Platform', 'Donation Pipeline', 'Community Outreach', 'Impact Stories'],
            impact: 'Mobilizes international donor support and local advocacy for vulnerable populations.'
        },
        {
            id: 7,
            title: 'Wiloty Foundation — Community Development & Education NGO',
            category: 'NGO & Non-Profit',
            tag: 'Education & Charity',
            image: '/images/wiloty.jpg',
            url: 'https://wilotyfoundation.org/',
            desc: 'Grassroots Ghanaian NGO portal committed to community advancement, basic education advocacy, underprivileged school support, and rural educational development.',
            stack: ['Grassroots Advocacy', 'Campaign Transparency', 'Donor Outreach', 'Events Portal'],
            impact: 'Directly supported underprivileged basic schools and community learning centers in Ghana.'
        },
        {
            id: 8,
            title: 'R&R Non-Governmental Organization',
            category: 'NGO & Non-Profit',
            tag: 'Civil Society',
            image: '/images/r&r.png',
            url: null,
            desc: 'Impactful digital advocacy portal designed to communicate NGO initiatives, field project transparency, and public humanitarian initiatives.',
            stack: ['Non-Profit Platform', 'Field Reporting', 'Donor Relations', 'Global CDN'],
            impact: 'Expanded outreach to international civic partners and donor networks.'
        },

        // 5. Corporate & Financial Websites
        {
            id: 9,
            title: 'Adroit Cloud — Enterprise Operating System',
            category: 'Corporate Websites',
            tag: 'Enterprise Systems',
            image: '/images/Adroit.png',
            url: 'https://home.adroitcloud.online/',
            desc: 'Comprehensive multi-tenant ERP platform consolidating payroll, finance, inventory tracking, and executive telemetry into one unified command center across desktop, web, and mobile.',
            stack: ['Enterprise Cloud ERP', 'Modular Architecture', 'REST APIs', 'Multi-Platform'],
            impact: 'Reduced manual administrative overhead by 48% across multi-branch enterprise operations.'
        },
        {
            id: 10,
            title: 'Shade Micro-Credit Enterprise — Accessible Loans in Accra',
            category: 'Corporate Websites',
            tag: 'Financial Services',
            image: '/images/shade.png',
            url: 'https://shademicrocredit.vercel.app/',
            desc: 'Trustworthy financial services portal facilitating accessible micro-loans, SME business financing packages, and rapid loan inquiry processing for micro-entrepreneurs in Accra, Ghana.',
            stack: ['Micro-Finance Portal', 'Loan Eligibility Tool', 'Lead Inquiries', 'Mobile-First UX'],
            impact: 'Accelerated loan application inquiries and financial inclusion for small business owners in Accra.'
        },
        {
            id: 11,
            title: 'Sbinc Solutions — Dream, Desire, Create!',
            category: 'Corporate Websites',
            tag: 'Agency & Brand',
            image: '/images/sbinc.png',
            url: 'https://sbincsolutions.vercel.app/',
            desc: 'Sleek, modern corporate website and digital portfolio showcasing creative design, branding strategy, and software solutions with fluid interactive animations.',
            stack: ['Creative Agency', 'Interactive UI/UX', 'Portfolio Showcase', 'Fast SSR'],
            impact: 'Showcases creative capabilities with high engagement and fluid brand presentation.'
        },
        {
            id: 12,
            title: 'Willies Executive Brand & Portfolio',
            category: 'Corporate Websites',
            tag: 'Executive Platform',
            image: '/images/willies.png',
            url: null,
            desc: 'Bespoke, lightning-fast digital portfolio crafted for an executive industry leader, designed to showcase achievements, thought leadership, and consulting partnerships.',
            stack: ['Executive Branding', 'Editorial UI', 'Custom Typography', 'SEO Optimized'],
            impact: 'Generated 3x increase in high-tier consulting inquiries within 60 days of launch.'
        }
    ];

    const categories = ['All', 'SaaS & Desktop Apps', 'E-Commerce', 'Web Applications', 'NGO & Non-Profit', 'Corporate Websites'];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section className="section portfolio-section">
            <div className="container">
                <div className="center-text">
                    <span className="eyebrow">OUR LIVE & PROVEN WORK</span>
                    <h2 className="section-title">Engineered with Purpose, <em>Built for Scale</em></h2>
                    <p className="section-subtitle">
                        Explore our verified portfolio of live e-commerce marketplaces, cloud SaaS systems, desktop applications, NGO platforms, and corporate websites built for ambitious organizations.
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
                                    loading="lazy"
                                />
                                <div className="project-badge-overlay">
                                    <span className="badge badge-gray">{project.tag}</span>
                                </div>
                                
                                <div className="project-overlay-actions">
                                    <button 
                                        className="project-expand-btn"
                                        onClick={() => setActiveModalProject(project)}
                                        aria-label={`View details of ${project.title}`}
                                    >
                                        <span>Details</span>
                                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 2H14V6M14 2L8 8M6 14H2V10M2 14L8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    {project.url && (
                                        <a 
                                            href={project.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="project-live-btn"
                                            aria-label={`Visit live site of ${project.title}`}
                                        >
                                            <span>Visit Live</span>
                                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="project-body">
                                <div className="project-meta-top">
                                    <span className="project-category-text">{project.category}</span>
                                    {project.url && (
                                        <span className="live-status-pill">
                                            <span className="status-live-dot"></span> Live
                                        </span>
                                    )}
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

                                <div className="project-card-footer">
                                    {project.url ? (
                                        <a 
                                            href={project.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="project-footer-link"
                                        >
                                            <span>Visit Live Site</span>
                                            <span className="link-arrow">↗</span>
                                        </a>
                                    ) : (
                                        <button 
                                            className="project-footer-link" 
                                            onClick={() => setActiveModalProject(project)}
                                        >
                                            <span>View Project Overview</span>
                                            <span className="link-arrow">→</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Callout banner */}
                <div className="portfolio-cta-banner">
                    <div className="cta-banner-text">
                        <h3>Have a visionary project in mind?</h3>
                        <p>We engineer custom software, web applications, and digital platforms for growing organizations.</p>
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
                            <div className="modal-badge-row">
                                <span className="badge badge-blue">{activeModalProject.category}</span>
                                <span className="badge badge-gray">{activeModalProject.tag}</span>
                            </div>
                            <h2 className="modal-title">{activeModalProject.title}</h2>
                            <p className="modal-desc">{activeModalProject.desc}</p>
                            
                            <div className="modal-impact-highlight">
                                <strong>Demonstrated Operational Impact:</strong> {activeModalProject.impact}
                            </div>

                            <div className="modal-tech-stack">
                                <strong>Architecture & Technologies:</strong>
                                <div className="tech-pill-row">
                                    {activeModalProject.stack.map((item, idx) => (
                                        <span key={idx} className="tech-pill">{item}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-actions">
                                {activeModalProject.url && (
                                    <a 
                                        href={activeModalProject.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="btn btn-primary"
                                    >
                                        <span>Open Live Website ↗</span>
                                    </a>
                                )}
                                <Link to="/contact" className="btn btn-outline" onClick={() => setActiveModalProject(null)}>
                                    Request Similar Build
                                </Link>
                                <button className="btn btn-ghost" onClick={() => setActiveModalProject(null)}>
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
