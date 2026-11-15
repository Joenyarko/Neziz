import React from 'react';
import { Link } from 'react-router-dom';

const CtaBanner = () => {
    return (
        <section className="cta-dark-section">
            <div className="cta-dark-ambient-glow"></div>
            <div className="container">
                <div className="cta-dark-inner">
                    <span className="eyebrow eyebrow-white">READY TO ELEVATE YOUR PLATFORM?</span>
                    <h2 className="cta-dark-title">
                        Ready to build software that gives your organization an <em>unfair advantage?</em>
                    </h2>
                    <p className="cta-dark-desc">
                        Partner with our software engineering team to architect custom cloud portals, automated workflows, and high-performance digital systems.
                    </p>
                    <div className="cta-dark-actions">
                        <Link to="/contact" className="btn btn-white btn-lg">
                            <span>Start a Conversation</span>
                            <span className="btn-arrow">→</span>
                        </Link>
                        <Link to="/portfolio" className="btn btn-ghost-white btn-lg">
                            <span>Browse Case Studies</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaBanner;

