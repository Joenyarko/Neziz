import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All',
    'Client Websites',
    'Web Applications & SaaS',
    'E-Commerce',
    'NGO & Non-Profit',
    'Prototypes'
  ];

  const filteredProjects = projectsData.filter(project => {
    // Category match
    const matchesCategory =
      selectedCategory === 'All' ||
      (selectedCategory === 'Client Websites' && project.candidateType.includes('Corporate') || project.candidateType.includes('Client Website')) ||
      (selectedCategory === 'Web Applications & SaaS' && (project.candidateType.includes('Web Application') || project.candidateType.includes('Desktop'))) ||
      (selectedCategory === 'E-Commerce' && project.candidateType.includes('E-Commerce')) ||
      (selectedCategory === 'NGO & Non-Profit' && project.candidateType.includes('NGO')) ||
      (selectedCategory === 'Prototypes' && (project.publicationStatus === 'prototype' || project.candidateType.includes('Prototype')));

    // Search match (title, stack, or client)
    const matchesSearch =
      searchTerm.trim() === '' ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.confirmedStack.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const getBadgeClass = (status) => {
    switch (status) {
      case 'published':
        return 'badge-green';
      case 'prototype':
        return 'badge-orange';
      case 'review_entry':
        return 'badge-gray';
      default:
        return 'badge-blue';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'published':
        return 'Verified Project';
      case 'prototype':
        return 'Prototype';
      case 'review_entry':
        return 'Preserved for Review';
      default:
        return 'Candidate for Review';
    }
  };

  return (
    <section className="section portfolio-section">
      <div className="container">
        {/* Section Header */}
        <div className="center-text portfolio-header-block">
          <span className="eyebrow">WEB DEVELOPER PORTFOLIO</span>
          <h1 className="section-title">
            Client Websites, Applications & <em>Case Studies</em>
          </h1>
          <p className="section-subtitle">
            Project candidates, client websites, and web applications delivered across informal, personal, and collaborative engagements. Each case study documents confirmed technologies, exact roles, and testing.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="portfolio-controls-bar">
          <div className="portfolio-filter-bar" role="tablist" aria-label="Project Categories">
            {categories.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="portfolio-search-box">
            <input 
              type="text" 
              placeholder="Filter by tech (e.g. React, PHP, MySQL)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="portfolio-search-input"
              aria-label="Filter projects by technology or title"
            />
            {searchTerm && (
              <button 
                className="search-clear-btn" 
                onClick={() => setSearchTerm('')}
                aria-label="Clear filter search"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Candidate Engagement Notice */}
        <div className="candidate-notice-banner card-surface" role="note">
          <div className="notice-icon" aria-hidden="true">📋</div>
          <div className="notice-text">
            <strong>Recruiter Context:</strong> Engagements listed below represent candidate case studies from informal, personal, volunteer, and collaborative builds. Scope is strictly defined per project to demonstrate verified hands-on web development capabilities.
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="empty-projects-state card">
            <h3>No matching projects found</h3>
            <p>No project entries match your current search or category filter.</p>
            <button 
              className="btn btn-outline" 
              onClick={() => { setSelectedCategory('All'); setSearchTerm(''); }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="portfolio-grid">
            {filteredProjects.map(project => (
              <article key={project.id} className="project-card card card-hover">
                {/* Visual Thumbnail */}
                <div className="project-visual-wrapper">
                  {project.screenshots && project.screenshots.length > 0 ? (
                    <img 
                      src={project.screenshots[0].src} 
                      alt={project.screenshots[0].alt} 
                      className="project-main-image"
                      loading="lazy"
                    />
                  ) : (
                    <div className="project-placeholder-visual">
                      <span className="placeholder-icon">📁</span>
                      <span className="placeholder-label">Review Entry / Draft</span>
                    </div>
                  )}

                  <div className="project-badge-overlay">
                    <span className={`badge ${getBadgeClass(project.publicationStatus)}`}>
                      {getStatusLabel(project.publicationStatus)}
                    </span>
                  </div>

                  {project.liveUrl && (
                    <div className="project-live-indicator-overlay">
                      <span className="live-status-pill">
                        <span className="status-live-dot" aria-hidden="true"></span> Live
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="project-body">
                  <div className="project-meta-top">
                    <span className="project-category-text">{project.candidateType}</span>
                    <span className="project-role-tag">{project.exactRole}</span>
                  </div>

                  <h2 className="project-heading">{project.title}</h2>
                  
                  <p className="project-client-name">
                    <strong>Client/Organization:</strong> {project.clientName}
                  </p>

                  <p className="project-description">
                    {project.problem}
                  </p>

                  {/* Confirmed Stack Pills */}
                  <div className="project-tech-tags" aria-label="Confirmed Technologies">
                    {project.confirmedStack.map((tech, idx) => (
                      <span key={idx} className="tech-pill">{tech}</span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-card-footer">
                    <Link 
                      to={`/portfolio/${project.slug}`} 
                      className="btn btn-outline btn-sm"
                      aria-label={`Read full case study for ${project.title}`}
                    >
                      <span>Case Study & Scope</span>
                      <span aria-hidden="true">→</span>
                    </Link>

                    {project.liveUrl ? (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary btn-sm project-external-btn"
                        aria-label={`Open live site for ${project.title} in a new tab`}
                      >
                        <span>Visit Live</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span className="project-offline-pill">
                        {project.publicationStatus === 'prototype' ? 'Prototype' : 'Internal Build'}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Candidate Verification Footnote */}
        <div className="verification-callout-card card">
          <div className="callout-text">
            <h3>Fact-Checking & Interview Walkthroughs</h3>
            <p>
              I believe in radical technical transparency. For job interviews, I am available to provide live code walkthroughs, explain specific component architectures, and detail the exact testing performed.
            </p>
          </div>
          <div className="callout-action">
            <Link to="/contact" className="btn btn-primary">
              Schedule Technical Discussion →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
