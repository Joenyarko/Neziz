import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('viotor');

  const candidateHighlights = {
    viotor: {
      title: 'Shop Viotor — Campus & Community E-Commerce Marketplace',
      tag: 'E-Commerce Candidate',
      status: 'Live Marketplace',
      image: '/images/shopviotor.png',
      desc: 'Frontend marketplace development serving Accra Technical University vendors and consumers, built with responsive product browsing and Mobile Money checkout touchpoints.',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
      caseStudyUrl: '/portfolio/shop-viotor',
      liveUrl: 'https://www.shopviotor.com/'
    },
    wiloty: {
      title: 'Wiloty Foundation — Community Development & Education NGO',
      tag: 'NGO Candidate',
      status: 'Live Website',
      image: '/images/wiloty.jpg',
      desc: 'Accessible website structure and responsive layout developed to highlight community development initiatives, basic school support, and rural advancement across Ghana.',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'Mobile-First'],
      caseStudyUrl: '/portfolio/wiloty-foundation',
      liveUrl: 'https://wilotyfoundation.org/'
    },
    invento: {
      title: 'NezizInvento — Desktop Inventory & Point-of-Sale Tool',
      tag: 'Desktop Software',
      status: 'Verified Working Tool',
      image: '/images/nezizinvento.jpg',
      desc: 'Standalone desktop inventory tool engineered for offline retail reliability, featuring live stock valuation calculation (GH₵13,400+), low-stock warning indicators, and sales logs.',
      stack: ['Desktop UI Architecture', 'Local Storage', 'Offline Telemetry'],
      caseStudyUrl: '/portfolio/nezizinvento',
      liveUrl: null
    },
    sappcloud: {
      title: 'SappCloud — Free Microsoft SQL Training Sessions',
      tag: 'Web Application Candidate',
      status: 'Live Portal',
      image: '/images/B.A.png',
      desc: 'Structured curriculum presentation and session schedule portal developed for free Microsoft SQL Server database training sessions and student resources.',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Layout'],
      caseStudyUrl: '/portfolio/sappcloud',
      liveUrl: 'https://sappcloud.net/'
    }
  };

  const currentHighlight = candidateHighlights[activeTab];

  return (
    <section className="hero-section" aria-label="Introduction and positioning">
      <div className="hero-glow-ambient" aria-hidden="true"></div>

      <div className="container hero-container">
        {/* Eyebrow Badge */}
        <div className="hero-eyebrow-wrapper">
          <div className="hero-eyebrow">
            <span className="eyebrow-pulse-dot" aria-hidden="true"></span>
            <span className="eyebrow-tag">Joe Nyarko</span>
            <span className="eyebrow-divider" aria-hidden="true">/</span>
            <span>Web Developer • Mamprobi, Accra</span>
          </div>
        </div>

        {/* STATIC HEADLINE - Readable, works without JavaScript, respects reduced motion */}
        <h1 className="hero-h1">
          Web developer building client websites and web applications.
        </h1>

        {/* Subtitle */}
        <p className="hero-sub">
          I build clean, accessible, and responsive client websites and web applications using HTML, CSS, React, PHP, and MySQL. Ready to contribute practical problem-solving to web development teams.
        </p>

        {/* Leading Core Skills Badges */}
        <div className="hero-lead-skills-bar" aria-label="Core Technical Skills">
          <span className="lead-skills-label">Core Technologies:</span>
          <div className="lead-skills-tags">
            <span className="tech-badge-primary">HTML</span>
            <span className="tech-badge-primary">CSS</span>
            <span className="tech-badge-primary">React</span>
            <span className="tech-badge-primary">PHP</span>
            <span className="tech-badge-primary">MySQL</span>
          </div>
        </div>

        {/* Supporting Background Pill */}
        <div className="hero-supporting-bg-pill">
          <span className="supporting-icon" aria-hidden="true">📌</span>
          <span>
            Supporting background in <strong>Data Analysis</strong> and <strong>Virtual Assistance</strong>.
          </span>
        </div>

        {/* Call to Action Buttons */}
        <div className="hero-actions">
          <Link to="/portfolio" className="btn btn-primary btn-lg">
            <span>View Projects & Case Studies</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
          <Link to="/contact" className="btn btn-outline btn-lg">
            <span>Contact Joe Nyarko</span>
          </Link>
        </div>

        {/* CV Status Note (No broken download button) */}
        <p className="cv-status-hint">
          <span>📄</span> CV available upon request for active recruiter reviews — reach out via email or phone.
        </p>
      </div>

      {/* Proof & Reliability Strip */}
      <div className="proof-strip" aria-label="Development standards">
        <div className="container proof-strip-inner">
          <div className="proof-item">
            <span className="proof-icon" aria-hidden="true">✓</span>
            <span>Semantic & Accessible HTML/CSS</span>
          </div>
          <div className="proof-separator" aria-hidden="true">•</div>
          <div className="proof-item">
            <span className="proof-icon" aria-hidden="true">✓</span>
            <span>Mobile-First Testing (320px–1280px+)</span>
          </div>
          <div className="proof-separator" aria-hidden="true">•</div>
          <div className="proof-item">
            <span className="proof-icon" aria-hidden="true">✓</span>
            <span>Verified Case Studies & Scope Definition</span>
          </div>
          <div className="proof-separator" aria-hidden="true">•</div>
          <div className="proof-item">
            <span className="proof-icon" aria-hidden="true">✓</span>
            <span>Primary Phone: +233242528504</span>
          </div>
        </div>
      </div>

      {/* Candidate Showcase Frame */}
      <div className="container dash-outer">
        <div className="dash-frame">
          {/* Window Header */}
          <div className="dash-window-header">
            <div className="dash-window-controls" aria-hidden="true">
              <span className="win-dot dot-close"></span>
              <span className="win-dot dot-min"></span>
              <span className="win-dot dot-max"></span>
            </div>
            <div className="dash-window-url">
              <span aria-hidden="true">🔒</span>
              <span>joenyarko.dev / verified-candidate-proof</span>
            </div>
            <div className="dash-window-status">
              <span className="status-indicator" aria-hidden="true"></span>
              <span>Candidate Case Studies</span>
            </div>
          </div>

          {/* Body */}
          <div className="dash-body">
            {/* Tabs */}
            <div className="dash-tabs-bar" role="tablist" aria-label="Featured Candidate Projects">
              <button 
                role="tab"
                aria-selected={activeTab === 'viotor'}
                className={`dash-tab-btn ${activeTab === 'viotor' ? 'active' : ''}`}
                onClick={() => setActiveTab('viotor')}
              >
                <span className="tab-dot" aria-hidden="true"></span>
                <span>Shop Viotor (E-Com)</span>
              </button>
              <button 
                role="tab"
                aria-selected={activeTab === 'wiloty'}
                className={`dash-tab-btn ${activeTab === 'wiloty' ? 'active' : ''}`}
                onClick={() => setActiveTab('wiloty')}
              >
                <span className="tab-dot" aria-hidden="true"></span>
                <span>Wiloty Foundation (NGO)</span>
              </button>
              <button 
                role="tab"
                aria-selected={activeTab === 'invento'}
                className={`dash-tab-btn ${activeTab === 'invento' ? 'active' : ''}`}
                onClick={() => setActiveTab('invento')}
              >
                <span className="tab-dot" aria-hidden="true"></span>
                <span>NezizInvento (Desktop)</span>
              </button>
              <button 
                role="tab"
                aria-selected={activeTab === 'sappcloud'}
                className={`dash-tab-btn ${activeTab === 'sappcloud' ? 'active' : ''}`}
                onClick={() => setActiveTab('sappcloud')}
              >
                <span className="tab-dot" aria-hidden="true"></span>
                <span>SappCloud (Training)</span>
              </button>
            </div>

            {/* Content Preview */}
            <div className="dash-content-grid">
              <div className="dash-visual-preview">
                <img 
                  src={currentHighlight.image} 
                  alt={`Screenshot showing ${currentHighlight.title}`} 
                  className="dash-screenshot"
                />
                <div className="dash-preview-badge">
                  <span className="badge-live-dot" aria-hidden="true"></span>
                  {currentHighlight.status}
                </div>
              </div>

              <div className="dash-meta-panel">
                <span className="meta-category-badge">{currentHighlight.tag}</span>
                <h2 className="meta-title">{currentHighlight.title}</h2>
                <p className="meta-description">{currentHighlight.desc}</p>

                <div className="meta-stack-row">
                  <span className="stack-label">Confirmed Technologies:</span>
                  <div className="tech-tags-group">
                    {currentHighlight.stack.map((t, idx) => (
                      <span key={idx} className="tech-pill">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="meta-cta-row">
                  <Link to={currentHighlight.caseStudyUrl} className="btn btn-primary btn-sm">
                    Read Case Study & Scope →
                  </Link>
                  {currentHighlight.liveUrl && (
                    <a 
                      href={currentHighlight.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline btn-sm"
                    >
                      Visit Live Site ↗
                    </a>
                  )}
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
