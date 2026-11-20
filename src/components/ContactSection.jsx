import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { CONTACT_INFO, getTelHref, getWhatsAppHref } from '../data/contactInfo';

const ContactSection = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        from_contact: '',
        message: ''
    });
    const [touched, setTouched] = useState({
        from_name: false,
        from_email: false,
        from_contact: false,
        message: false
    });
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error', ''
    const [submitAttempted, setSubmitAttempted] = useState(false);

    // Validate a single field
    const validateField = (name, value) => {
        const val = (value || '').trim();
        switch (name) {
            case 'from_name':
                if (!val) return 'Full name is required.';
                if (val.length < 2) return 'Full name must be at least 2 characters.';
                return '';
            case 'from_email':
                if (!val) return 'Work email is required.';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Please enter a valid email address.';
                return '';
            case 'from_contact':
                if (!val) return 'Phone number is required.';
                if (!/^[\d\s+\-()]{7,20}$/.test(val)) return 'Please enter a valid phone number (min 7 digits).';
                return '';
            case 'message':
                if (!val) return 'Project description is required.';
                if (val.length < 10) return 'Please provide at least 10 characters describing your project.';
                return '';
            default:
                return '';
        }
    };

    const errors = {
        from_name: validateField('from_name', formData.from_name),
        from_email: validateField('from_email', formData.from_email),
        from_contact: validateField('from_contact', formData.from_contact),
        message: validateField('message', formData.message)
    };

    const isFormValid = !errors.from_name && !errors.from_email && !errors.from_contact && !errors.message;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setSubmitAttempted(true);

        // Mark all touched
        setTouched({
            from_name: true,
            from_email: true,
            from_contact: true,
            message: true
        });

        if (!isFormValid) {
            return;
        }

        setStatus('sending');

        // Service ID: service_15qt7u9
        // Template ID: template_77bb575
        // Public Key: RnDMjpS3SRn79Wa_d
        emailjs.sendForm('service_15qt7u9', 'template_77bb575', form.current, 'RnDMjpS3SRn79Wa_d')
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setFormData({
                    from_name: '',
                    from_email: '',
                    from_contact: '',
                    message: ''
                });
                setTouched({
                    from_name: false,
                    from_email: false,
                    from_contact: false,
                    message: false
                });
                setSubmitAttempted(false);
                setTimeout(() => setStatus(''), 8000);
            }, (error) => {
                console.error(error.text);
                setStatus('error');
            });
    };

    const shouldShowError = (fieldName) => {
        return (touched[fieldName] || submitAttempted) && Boolean(errors[fieldName]);
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
                            Whether you're looking to automate enterprise operations, develop a custom web platform, or overhaul your digital systems, our team is ready to collaborate.
                        </p>

                        <div className="contact-cards-list">
                            {/* Card 1: Direct Email */}
                            <div className="contact-info-card card">
                                <div className="info-icon-box">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                    </svg>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">Direct Email</span>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="info-value-link">
                                        {CONTACT_INFO.email}
                                    </a>
                                </div>
                            </div>

                            {/* Card 2: Business Phone (tel:) */}
                            <div className="contact-info-card card">
                                <div className="info-icon-box">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">Business Phone</span>
                                    <a href={getTelHref()} className="info-value-link">
                                        {CONTACT_INFO.businessPhoneFormatted}
                                    </a>
                                </div>
                            </div>

                            {/* Card 3: WhatsApp (wa.me) */}
                            <div className="contact-info-card card">
                                <div className="info-icon-box info-icon-whatsapp">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                                    </svg>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">WhatsApp</span>
                                    <a href={getWhatsAppHref()} target="_blank" rel="noopener noreferrer" className="info-value-link">
                                        {CONTACT_INFO.whatsappFormatted} ↗
                                    </a>
                                </div>
                            </div>

                            {/* Card 4: Location */}
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
                                        {CONTACT_INFO.location}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-guarantee-note">
                            <span className="guarantee-icon">⚡</span>
                            <span><strong>Prompt Communication:</strong> We review and reply to client inquiries promptly during normal business hours.</span>
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="contact-form-col">
                        <div className="contact-form-card card">
                            <div className="form-card-header">
                                <h3 className="form-card-title">Send a Project Brief</h3>
                                <p className="form-card-sub">Fill out the details below and we will get back to you with next steps.</p>
                            </div>

                            <form ref={form} onSubmit={sendEmail} className="project-contact-form" noValidate>
                                <input type="hidden" name="subject" value="Neziz Digital Solutions Inquiry" />

                                <div className="form-field-row">
                                    <div className="form-field">
                                        <label htmlFor="from_name">Full Name *</label>
                                        <input 
                                            type="text" 
                                            name="from_name" 
                                            id="from_name" 
                                            value={formData.from_name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={shouldShowError('from_name') ? 'input-error' : ''}
                                            placeholder="e.g. John Doe" 
                                            aria-invalid={shouldShowError('from_name')}
                                            required 
                                        />
                                        {shouldShowError('from_name') && (
                                            <span className="field-error-msg">{errors.from_name}</span>
                                        )}
                                    </div>

                                    <div className="form-field">
                                        <label htmlFor="from_email">Work Email *</label>
                                        <input 
                                            type="email" 
                                            name="from_email" 
                                            id="from_email" 
                                            value={formData.from_email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={shouldShowError('from_email') ? 'input-error' : ''}
                                            placeholder="john@organization.com" 
                                            aria-invalid={shouldShowError('from_email')}
                                            required 
                                        />
                                        {shouldShowError('from_email') && (
                                            <span className="field-error-msg">{errors.from_email}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="form-field">
                                    <label htmlFor="from_contact">Phone Number *</label>
                                    <input 
                                        type="tel" 
                                        name="from_contact" 
                                        id="from_contact" 
                                        value={formData.from_contact}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={shouldShowError('from_contact') ? 'input-error' : ''}
                                        placeholder="+233 XX XXX XXXX" 
                                        aria-invalid={shouldShowError('from_contact')}
                                        required 
                                    />
                                    {shouldShowError('from_contact') && (
                                        <span className="field-error-msg">{errors.from_contact}</span>
                                    )}
                                </div>

                                <div className="form-field">
                                    <label htmlFor="message">Project Description / Scope *</label>
                                    <textarea 
                                        name="message" 
                                        id="message" 
                                        rows="4" 
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={shouldShowError('message') ? 'input-error' : ''}
                                        placeholder="Tell us about your project goals, timelines, and technical requirements..." 
                                        aria-invalid={shouldShowError('message')}
                                        required
                                    ></textarea>
                                    {shouldShowError('message') && (
                                        <span className="field-error-msg">{errors.message}</span>
                                    )}
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
                                        <span>Failed to send. Please call us directly at {CONTACT_INFO.businessPhoneFormatted} or email {CONTACT_INFO.email}.</span>
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