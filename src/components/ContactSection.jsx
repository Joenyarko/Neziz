import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error', ''

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Service ID: service_15qt7u9
        // Template ID: template_77bb575
        // Public Key: RnDMjpS3SRn79Wa_d
        emailjs.sendForm('service_15qt7u9', 'template_77bb575', form.current, 'RnDMjpS3SRn79Wa_d')
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus(''), 6000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-grid-layout">
                    {/* Left Column: Direct Info */}
                    <div className="contact-info-col">
                        <span className="eyebrow">INITIATE A CONVERSATION</span>
                        <h2 className="section-title">
                            Let's Build Something<br />
                            <em>Exceptional Together.</em>
                        </h2>
                        <p className="contact-lead-text">
                            Whether you're looking to automate enterprise operations, develop a custom web platform, or overhaul your digital systems, our software architects are ready to collaborate.
                        </p>

                        <div className="contact-cards-list">
                            <div className="contact-info-card card">
                                <div className="info-icon-box">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                    </svg>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">Direct Email</span>
                                    <a href="mailto:joenyarko2001@gmail.com" className="info-value-link">
                                        joenyarko2001@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact-info-card card">
                                <div className="info-icon-box">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">Phone & WhatsApp</span>
                                    <a href="tel:0242528504" className="info-value-link">
                                        0242528504
                                    </a>
                                </div>
                            </div>

                            <div className="contact-info-card card">
                                <div className="info-icon-box">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">Studio Location</span>
                                    <span className="info-value-text">
                                        Mamprobi, Accra, Ghana
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-guarantee-note">
                            <span className="guarantee-icon">⚡</span>
                            <span><strong>Fast Response Guarantee:</strong> We review and reply to all client inquiries within 2 hours during normal business hours.</span>
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="contact-form-col">
                        <div className="contact-form-card card">
                            <div className="form-card-header">
                                <h3 className="form-card-title">Send a Project Brief</h3>
                                <p className="form-card-sub">Fill out the details below and we will get back to you with next steps.</p>
                            </div>

                            <form ref={form} onSubmit={sendEmail} className="project-contact-form">
                                <input type="hidden" name="subject" value="Neziz Digital Solutions Inquiry" />

                                <div className="form-field-row">
                                    <div className="form-field">
                                        <label htmlFor="from_name">Full Name *</label>
                                        <input 
                                            type="text" 
                                            name="from_name" 
                                            id="from_name" 
                                            placeholder="e.g. John Doe" 
                                            required 
                                        />
                                    </div>

                                    <div className="form-field">
                                        <label htmlFor="from_email">Work Email *</label>
                                        <input 
                                            type="email" 
                                            name="from_email" 
                                            id="from_email" 
                                            placeholder="john@organization.com" 
                                            required 
                                        />
                                    </div>
                                </div>

                                <div className="form-field">
                                    <label htmlFor="from_contact">Phone Number *</label>
                                    <input 
                                        type="tel" 
                                        name="from_contact" 
                                        id="from_contact" 
                                        placeholder="+233 XX XXX XXXX" 
                                        required 
                                    />
                                </div>

                                <div className="form-field">
                                    <label htmlFor="message">Project Description / Scope *</label>
                                    <textarea 
                                        name="message" 
                                        id="message" 
                                        rows="4" 
                                        placeholder="Tell us about your project goals, timelines, and technical requirements..." 
                                        required
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    className="btn btn-primary btn-block btn-lg" 
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? (
                                        <span>Transmitting Message...</span>
                                    ) : (
                                        <>
                                            <span>Submit Inquiry</span>
                                            <span className="btn-arrow">→</span>
                                        </>
                                    )}
                                </button>

                                {status === 'success' && (
                                    <div className="form-alert alert-success">
                                        <span className="alert-icon">✓</span>
                                        <span>Thank you! Your message has been received. Our team will contact you shortly.</span>
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="form-alert alert-error">
                                        <span className="alert-icon">⚠</span>
                                        <span>Failed to send. Please call us directly at 0242528504 or email joenyarko2001@gmail.com.</span>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
