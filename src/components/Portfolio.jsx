import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: 'Adroit IT Solutions',
            category: 'IT Solution',
            image: '/images/Adroit.png',
            desc: 'Comprehensive ERP software and IT solutions for enterprise efficiency.'
        },
        {
            id: 2,
            title: 'Willies Portfolio',
            category: 'Personal Website',
            image: '/images/willies.png',
            desc: 'A modern, responsive personal portfolio website for a client.'
        },
        {
            id: 3,
            title: 'Business Analytics',
            category: 'Data Optimization',
            image: '/images/B.A.png',
            desc: 'Advanced data insights and business analytics visualization.'
        },
        {
            id: 4,
            title: 'Custom Web Application',
            category: 'Web Application',
            image: '/images/Webapp.png',
            desc: 'Scalable and robust custom web application development.'
        },
        {
            id: 5,
            title: 'AI Bank Reconciliation',
            category: 'FinTech',
            image: '/images/Bankrecon.png',
            desc: 'Automated AI-powered system for accurate bank reconciliation.'
        },
        {
            id: 6,
            title: 'E-Commerce Platform',
            category: 'E-Commerce',
            image: '/images/ECOM.png',
            desc: 'Full-featured online retail platform with secure payment integration.'
        },
        {
            id: 7,
            title: 'R&R NGO',
            category: 'Non-Profit',
            image: '/images/r&r.png',
            desc: 'Impactful website for a Non-Governmental Organization.'
        }
    ];

    return (
        <section className="portfolio-page">
            <div className="container">
                <div className="portfolio-header">
                    <span className="section-badge">OUR WORK</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="portfolio-subtitle">Discover how we help brands grow through digital innovation.</p>
                </div>

                <div className="portfolio-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <button className="view-project-btn">View Project</button>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
