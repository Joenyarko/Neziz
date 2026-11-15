import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="center-text">
                    <span className="eyebrow">WHO WE ARE</span>
                    <h2 className="section-title">Innovating with Purpose, <em>Engineering for Tomorrow</em></h2>
                    <p className="section-subtitle">
                        Neziz is a modern digital solutions studio and enterprise software consultancy delivering bespoke engineering, cloud portals, and transformative digital experiences.
                    </p>
                </div>

                {/* Narrative & KPI Split */}
                <div className="about-split-layout">
                    <div className="about-narrative-col">
                        <span className="eyebrow eyebrow-blue">OUR STORY & PHILOSOPHY</span>
                        <h3 className="narrative-heading">
                            We bridge complex technical architecture with clean, human-centered software.
                        </h3>
                        <p className="narrative-p">
                            Founded in Mamprobi, Accra, Neziz was established to challenge the compromise between speed, beauty, and software resilience. We reject bloated templates and fragile quick-fixes in favor of robust, scalable engineering.
                        </p>
                        <p className="narrative-p">
                            Whether building enterprise ERP platforms for industrial leaders, automated bank reconciliation engines for fintech ventures, or high-conversion commercial portals, our team brings international engineering standards to every line of code.
                        </p>

                        <div className="about-checklist">
                            <div className="checklist-item">
                                <span className="check-icon">✓</span>
                                <div>
                                    <strong>Architectural Rigor:</strong> Clean, maintainable codebases built on modern stacks.
                                </div>
                            </div>
                            <div className="checklist-item">
                                <span className="check-icon">✓</span>
                                <div>
                                    <strong>Direct Collaboration:</strong> Work directly with seasoned developers and strategists.
                                </div>
                            </div>
                            <div className="checklist-item">
                                <span className="check-icon">✓</span>
                                <div>
                                    <strong>Enterprise Reliability:</strong> Tested under load with zero-tolerance for unexpected downtime.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-stats-col">
                        <div className="stats-card-grid">
                            <div className="stat-card card">
                                <div className="stat-number">14+</div>
                                <div className="stat-label">Enterprise & Growth Deployments</div>
                                <div className="stat-sub">Across Africa & International Markets</div>
                            </div>
                            <div className="stat-card card">
                                <div className="stat-number">99.9%</div>
                                <div className="stat-label">Production SLA Uptime</div>
                                <div className="stat-sub">High-availability cloud infrastructure</div>
                            </div>
                            <div className="stat-card card">
                                <div className="stat-number">48%</div>
                                <div className="stat-label">Average Efficiency Boost</div>
                                <div className="stat-sub">Via automated client workflows</div>
                            </div>
                            <div className="stat-card card">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Dedicated Support & Monitoring</div>
                                <div className="stat-sub">Immediate incident resolution</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3 Pillars Grid */}
                <div className="pillars-grid">
                    <div className="pillar-card card card-hover">
                        <div className="pillar-icon-box">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="m10 15 5-3-5-3v6Z"/>
                            </svg>
                        </div>
                        <h3 className="pillar-title">Our Mission</h3>
                        <p className="pillar-desc">
                            To empower enterprises and forward-thinking businesses with custom low-code and full-stack software solutions that drive measurable operational velocity and commercial growth.
                        </p>
                    </div>

                    <div className="pillar-card card card-hover">
                        <div className="pillar-icon-box">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                            </svg>
                        </div>
                        <h3 className="pillar-title">Our Vision</h3>
                        <p className="pillar-desc">
                            To become Africa’s premiere digital engineering studio, recognized globally for setting the benchmark in software craftsmanship, cloud performance, and digital innovation.
                        </p>
                    </div>

                    <div className="pillar-card card card-hover">
                        <div className="pillar-icon-box">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14 2 14 8 20 8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                                <polyline points="10 9 9 9 8 9"/>
                            </svg>
                        </div>
                        <h3 className="pillar-title">Our Approach</h3>
                        <p className="pillar-desc">
                            Radical transparency and agile execution. We treat every client engagement as a high-stakes partnership, delivering documented milestones, continuous testing, and proactive strategic advisory.
                        </p>
                    </div>
                </div>

                {/* About CTA */}
                <div className="about-cta-strip card-surface">
                    <div className="about-cta-text">
                        <h3>Interested in partnering with our engineering team?</h3>
                        <p>We are always eager to collaborate on ambitious digital and enterprise challenges.</p>
                    </div>
                    <Link to="/contact" className="btn btn-primary btn-lg">
                        <span>Get in Touch</span>
                        <span className="btn-arrow">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
