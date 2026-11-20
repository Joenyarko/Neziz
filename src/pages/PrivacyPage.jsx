import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../data/contactInfo';

const PrivacyPage = () => {
    return (
        <div className="policy-page section">
            <div className="container policy-container">
                <div className="policy-header">
                    <span className="eyebrow">LEGAL & TRANSPARENCY</span>
                    <h1 className="section-title">Privacy Policy</h1>
                    <p className="section-subtitle">
                        This privacy policy explains how Neziz handles information submitted through our website contact form.
                    </p>
                </div>

                <div className="policy-content card">
                    <section className="policy-block">
                        <h2>1. Scope & Commitment</h2>
                        <p>
                            Neziz ("we", "our", or "us") respects your privacy. This policy applies exclusively to information collected directly through our project inquiry and contact form on this website. We believe in minimal data collection: we only ask for the information necessary to understand your project and respond to your inquiry.
                        </p>
                    </section>

                    <section className="policy-block">
                        <h2>2. Information We Collect</h2>
                        <p>When you submit a project brief or reach out through our contact form, we collect only the fields you provide:</p>
                        <ul>
                            <li><strong>Full Name:</strong> To address you personally in our reply.</li>
                            <li><strong>Work Email:</strong> To send our project response, proposal, or follow-up questions.</li>
                            <li><strong>Phone Number:</strong> To contact you via call or WhatsApp if requested regarding your project.</li>
                            <li><strong>Project Description / Scope:</strong> To evaluate your technical requirements, timelines, and software needs.</li>
                        </ul>
                    </section>

                    <section className="policy-block">
                        <h2>3. How Your Information is Used</h2>
                        <p>
                            We use the submitted information solely to:
                        </p>
                        <ul>
                            <li>Review and assess your project requirements.</li>
                            <li>Respond with technical estimates, proposals, or questions.</li>
                            <li>Communicate directly with you regarding prospective work.</li>
                        </ul>
                        <p>
                            We do not use your contact information for automated marketing blasts, newsletter subscriptions, or unsolicited advertising.
                        </p>
                    </section>

                    <section className="policy-block">
                        <h2>4. Transmission & Third Parties</h2>
                        <p>
                            Contact form submissions are securely transmitted via EmailJS to our dedicated inbox ({CONTACT_INFO.email}). We do not sell, rent, trade, or distribute your personal information to third parties, data brokers, or marketing networks.
                        </p>
                    </section>

                    <section className="policy-block">
                        <h2>5. Retention & Your Rights</h2>
                        <p>
                            We retain inquiry correspondence only as long as necessary to conduct project discussions or fulfill ongoing business relationships. You may request the deletion or correction of your submitted contact details at any time by emailing us at{' '}
                            <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>.
                        </p>
                    </section>

                    <section className="policy-block">
                        <h2>6. Contact Us</h2>
                        <p>
                            If you have questions regarding this privacy policy, you can contact us directly:
                        </p>
                        <p>
                            <strong>Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a><br />
                            <strong>Location:</strong> {CONTACT_INFO.location}
                        </p>
                    </section>
                </div>

                <div className="policy-footer-nav">
                    <Link to="/contact" className="btn btn-primary">
                        <span>Get in Touch</span>
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

export default PrivacyPage;
