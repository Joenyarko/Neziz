import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProjectBySlug } from '../data/projectsData';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="section container not-found-case-study">
        <div className="card" style={{ maxWidth: '640px', margin: '4rem auto', textAlign: 'center' }}>
          <h2>Case Study Not Found</h2>
          <p style={{ margin: '1rem 0 2rem' }}>
            The requested project candidate could not be found or is currently in draft.
          </p>
          <Link to="/portfolio" className="btn btn-primary">
            ← Back to Projects & Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const getStatusBadgeClass = (status) => {
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
        return 'Experimental Prototype (Not Live)';
      case 'review_entry':
        return 'Preserved Entry Under Review';
      default:
        return 'Candidate Project — Pending Confirmation';
    }
  };

  return (
    <article className="section case-study-page">
      <div className="container">
        {/* Navigation Breadcrumb */}
        <div className="case-study-nav">
          <Link to="/portfolio" className="back-link">
            <span aria-hidden="true">←</span> Back to all projects & case studies
          </Link>
          <div className="case-study-status-indicator">
            <span className={`badge ${getStatusBadgeClass(project.publicationStatus)}`}>
              {getStatusLabel(project.publicationStatus)}
            </span>
          </div>
        </div>

        {/* Case Study Header */}
        <header className="case-study-header">
          <div className="case-study-eyebrow">
            <span className="eyebrow">{project.candidateType}</span>
            <span className="eyebrow-client">Client: {project.clientName}</span>
          </div>
          <h1 className="case-study-title">{project.title}</h1>
          <p className="case-study-summary-role">
            <strong>Role:</strong> {project.exactRole} &nbsp;|&nbsp; <strong>Engagement:</strong> {project.engagementType}
          </p>
        </header>

        {/* Scope Disclaimer Alert */}
        {project.scopeDisclaimer && (
          <aside className="scope-disclaimer-box" aria-label="Scope definition">
            <div className="disclaimer-icon" aria-hidden="true">ℹ️</div>
            <div className="disclaimer-content">
              <strong>Scope Notice:</strong> {project.scopeDisclaimer}
            </div>
          </aside>
        )}

        {/* Project Metadata Cards */}
        <div className="case-study-meta-grid">
          <div className="meta-card card">
            <span className="meta-card-label">Start / End Timeline</span>
            <span className="meta-card-value">{project.dates.start} – {project.dates.end}</span>
            <span className="meta-card-sub">{project.dates.status}</span>
          </div>

          <div className="meta-card card">
            <span className="meta-card-label">Engagement Classification</span>
            <span className="meta-card-value">{project.engagementType}</span>
            <span className="meta-card-sub">Informal / friend or third-party project</span>
          </div>

          <div className="meta-card card">
            <span className="meta-card-label">Live Deployment Status</span>
            <span className="meta-card-value">{project.liveStatus}</span>
            {project.liveUrl ? (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="live-external-link"
                aria-label={`Visit live website for ${project.title} (opens in new tab)`}
              >
                <span>Visit Live URL</span>
                <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="meta-card-sub">Direct link unavailable / offline</span>
            )}
          </div>

          <div className="meta-card card">
            <span className="meta-card-label">Publication Permission</span>
            <span className="meta-card-value">{project.publicationPermission}</span>
            <span className="meta-card-sub">Under formal pre-publication check</span>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="case-study-content-grid">
          {/* Main Case Study Column */}
          <div className="case-study-main-col">
            {/* Visual Screenshot */}
            {project.screenshots && project.screenshots.length > 0 && (
              <figure className="case-study-figure">
                <img 
                  src={project.screenshots[0].src} 
                  alt={project.screenshots[0].alt} 
                  className="case-study-img"
                />
                <figcaption className="case-study-figcaption">
                  {project.screenshots[0].caption}
                </figcaption>
              </figure>
            )}

            {/* Problem Statement */}
            <section className="case-study-section">
              <h2 className="section-subheading">1. The Problem & Context</h2>
              <p className="case-study-prose">{project.problem}</p>
            </section>

            {/* Work Personally Delivered */}
            <section className="case-study-section">
              <h2 className="section-subheading">2. Work Personally Delivered</h2>
              <ul className="deliverables-checklist">
                {project.workPersonallyDelivered.map((item, idx) => (
                  <li key={idx} className="deliverable-item">
                    <span className="check-bullet" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Confirmed Technologies */}
            <section className="case-study-section">
              <h2 className="section-subheading">3. Confirmed Technology Stack</h2>
              <div className="tech-tags-group">
                {project.confirmedStack.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </section>

            {/* Testing Performed */}
            <section className="case-study-section">
              <h2 className="section-subheading">4. Testing Performed</h2>
              <p className="case-study-prose">{project.testingPerformed}</p>
            </section>

            {/* Handover & Delivery */}
            <section className="case-study-section">
              <h2 className="section-subheading">5. Handover & Delivery</h2>
              <p className="case-study-prose">{project.handover}</p>
            </section>

            {/* Evidenced Outcome */}
            <section className="case-study-section">
              <h2 className="section-subheading">6. Evidenced Outcome</h2>
              <div className="outcome-box">
                <p className="outcome-text">
                  <strong>Outcome:</strong> {project.evidencedOutcome}
                </p>
                <span className="evidence-rule-note">
                  Note: Evidence adheres to verifiable deliverables. No unverified revenue gains or speculative metrics are claimed.
                </span>
              </div>
            </section>

            {/* Code Sample Availability */}
            <section className="case-study-section">
              <h2 className="section-subheading">7. Code Sample & Repository Access</h2>
              <p className="case-study-prose">
                <strong>Status:</strong> {project.permittedCodeSample}. <br />
                For confidential or client-owned work, private code walk-throughs can be arranged during an interview upon request.
              </p>
            </section>
          </div>

          {/* Sidebar / Verification Panel */}
          <aside className="case-study-sidebar" aria-label="Review and Verification Status">
            <div className="sidebar-review-card card">
              <h3 className="sidebar-heading">Fact-Check & Review Checklist</h3>
              <p className="sidebar-sub">
                This case study is part of Joe Nyarko’s web developer portfolio. Unresolved points are tracked below before final publication:
              </p>

              <div className="unresolved-facts-list">
                <h4 className="facts-list-title">Items Pending User Confirmation:</h4>
                <ul>
                  {project.unresolvedFacts.map((fact, idx) => (
                    <li key={idx} className="unresolved-fact-item">
                      <span className="unresolved-bullet" aria-hidden="true">⏳</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-collaborators-box">
                <span className="sidebar-label">Collaborators:</span>
                <span className="sidebar-value">{project.collaborators}</span>
              </div>

              <div className="sidebar-contact-prompt">
                <span className="sidebar-label">Recruiter Inquiries:</span>
                <p className="sidebar-sub">
                  Have questions about this project's code or exact scope?
                </p>
                <Link to="/contact" className="btn btn-outline btn-block btn-sm">
                  Contact Joe Nyarko
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom Navigation */}
        <div className="case-study-footer-nav">
          <Link to="/portfolio" className="btn btn-outline">
            ← Return to All Projects
          </Link>
          <Link to="/contact" className="btn btn-primary">
            Discuss a Web Developer Opportunity
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CaseStudyDetail;
