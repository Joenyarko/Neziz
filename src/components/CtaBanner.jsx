import React from 'react';
import { Link } from 'react-router-dom';

const CtaBanner = () => {
  return (
    <section className="cta-dark-section" aria-label="Recruiter call to action">
      <div className="cta-dark-ambient-glow" aria-hidden="true"></div>
      <div className="container">
        <div className="cta-dark-inner">
          <span className="eyebrow eyebrow-white">OPEN TO NEW OPPORTUNITIES</span>
          <h2 className="cta-dark-title">
            Looking for a web developer who delivers clean, <em>responsive code?</em>
          </h2>
          <p className="cta-dark-desc">
            I am available for web developer positions, frontend roles, and contract website projects. Let's discuss how my technical skills and practical problem-solving can support your team.
          </p>
          <div className="cta-dark-actions">
            <Link to="/contact" className="btn btn-white btn-lg">
              <span>Contact Joe Nyarko</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
            <Link to="/portfolio" className="btn btn-ghost-white btn-lg">
              <span>View Case Studies</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
