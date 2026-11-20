import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../data/contactInfo';

const SecurityPage = () => {
    return (
        <div className="policy-page section">
            <div className="container policy-container">
                <div className="policy-header">
                    <span className="eyebrow">TRUST & ARCHITECTURE</span>
                    <h1 className="section-title">Security & Confidentiality</h1>
                    <p className="section-subtitle">
                        Our engineering standards, data protection protocols, and commitment to client project confidentiality.
                    </p>
                </div>

                <div className="policy-content card">
                    <section className="policy-block">
                        <h2>1. In-Transit Encryption</h2>
                        <p>
                            All traffic across our website and platforms is enforced over HTTPS using TLS 1.3 encryption. Communications sent through our website contact form are encrypted in transit and delivered directly to authenticated endpoints.
                        </p>
                    </section>

                    <section className="policy-block">
                        <h2>2. Project & Code Confidentiality</h2>
                        <p>
                            We treat all client concepts, technical briefs, proprietary workflows, and project roadmaps with strict confidentiality. Non-disclosure agreements (NDAs) are signed prior to deep technical architecture reviews upon client request.
                        </p>
                    </section>

                    <section className="policy-block">
                        <h2>3. Secure Engineering Practices</h2>
                        <p>
                            In our software development work for clients, we adhere to rigorous security standards:
                        </p>
                        <ul>
                            <li><strong>Environment Isolation:</strong> Production keys, API tokens, and credentials are never stored in source code.</li>
                            <li><strong>Authentication & Authorization:</strong> Multi-tenant isolation and role-based access control (RBAC) on all cloud portals.</li>
                            <li><strong>Input Sanitization:</strong> Protection against SQL injection, cross-site scripting (XSS), and CSRF attacks.</li>
                            <li><strong>Database Backups:</strong> Automated daily backups with verified point-in-time recovery on client systems.</li>
                        </ul>
                    </section>

                    <section className="policy-block">
                        <h2>4. Reporting Security Inquiries</h2>
                        <p>
                            If you have questions about our security practices or wish to coordinate a secure project consultation, please reach out directly:
                        </p>
                        <p>
                            <strong>Direct Contact:</strong> <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a><br />
                            <strong>Location:</strong> {CONTACT_INFO.location}
                        </p>
                    </section>
                </div>

                <div className="policy-footer-nav">
                    <Link to="/contact" className="btn btn-primary">
                        <span>Initiate Project Consultation</span>
                        <span className="btn-arrow">→</span>
                    </Link>
                    <Link to="/" className="btn btn-outline">
                        <span>Back to Home</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SecurityPage;
