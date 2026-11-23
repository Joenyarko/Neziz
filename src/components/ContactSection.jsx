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

    const handleWhatsAppSubmit = (e) => {
        if (e) e.preventDefault();
        const parts = [];
        if (formData.from_name) parts.push(`Name: ${formData.from_name.trim()}`);
        if (formData.from_contact) parts.push(`Phone: ${formData.from_contact.trim()}`);
        if (formData.from_email) parts.push(`Email: ${formData.from_email.trim()}`);
        if (formData.message) parts.push(`Project Details: ${formData.message.trim()}`);

        const message = parts.length > 0
            ? `Hello Neziz! I would like to inquire about a project:\n${parts.join('\n')}`
            : 'Hello Neziz, I would like to inquire about your software and web development services.';

        window.open(getWhatsAppHref(message), '_blank', 'noopener,noreferrer');
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
                {/* Prominent WhatsApp Quick Banner */}
                <div className="contact-whatsapp-banner card">
                    <div className="whatsapp-banner-content">
                        <div className="whatsapp-badge-icon" aria-hidden="true">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </div>
                        <div className="whatsapp-banner-text">
                            <span className="whatsapp-banner-tag">RECOMMENDED • FASTEST RESPONSE</span>
                            <h3 className="whatsapp-banner-heading">Need a fast quote or direct answer? Message us on WhatsApp</h3>
                            <p className="whatsapp-banner-sub">
                                Skip the form wait. Chat directly with Joseph Nyarko on WhatsApp at <strong>{CONTACT_INFO.whatsappFormatted}</strong>.
                            </p>
                        </div>
                    </div>
                    <a
                        href={getWhatsAppHref('Hello Neziz, I would like to inquire about starting a project.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp btn-lg whatsapp-banner-action"
                    >
                        <span>Message on WhatsApp</span>
                        <span className="btn-arrow">↗</span>
                    </a>
                </div>

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
                            {/* Card 1: WhatsApp (wa.me) - Prominent First */}
                            <div className="contact-info-card card contact-info-card-whatsapp">
                                <div className="info-icon-box info-icon-whatsapp">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <div className="info-text">
                                    <div className="info-label-row">
                                        <span className="info-label">WhatsApp</span>
                                        <span className="info-badge-fastest">Fastest</span>
                                    </div>
                                    <a href={getWhatsAppHref()} target="_blank" rel="noopener noreferrer" className="info-value-link info-value-whatsapp">
                                        {CONTACT_INFO.whatsappFormatted} ↗
                                    </a>
                                </div>
                            </div>

                            {/* Card 2: Business Phone (tel:) */}
                            <div className="contact-info-card card">
                                <div className="info-icon-box">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">Direct Phone</span>
                                    <a href={getTelHref()} className="info-value-link">
                                        {CONTACT_INFO.businessPhoneFormatted}
                                    </a>
                                </div>
                            </div>

                            {/* Card 3: Direct Email */}
                            <div className="contact-info-card card">
                                <div className="info-icon-box">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">Direct Email</span>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="info-value-link">
                                        {CONTACT_INFO.email}
                                    </a>
                                </div>
                            </div>

                            {/* Card 4: Location */}
                            <div className="contact-info-card card">
                                <div className="info-icon-box">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                        <circle cx="12" cy="10" r="3" />
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
                            <span><strong>Fast WhatsApp Responses:</strong> For the quickest turnaround, message us on WhatsApp directly.</span>
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="contact-form-col">
                        <div className="contact-form-card card">
                            <div className="form-card-header">
                                <h3 className="form-card-title">Send a Project Brief</h3>
                                <p className="form-card-sub">Submit your project details below or message directly on WhatsApp.</p>
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
                                    <label htmlFor="from_contact">Phone Number (WhatsApp Preferred) *</label>
                                    <input
                                        type="tel"
                                        name="from_contact"
                                        id="from_contact"
                                        value={formData.from_contact}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={shouldShowError('from_contact') ? 'input-error' : ''}
                                        placeholder="e.g. 024XXXXXXX or +233..."
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

                                <div className="form-buttons-group">
                                    <button
                                        type="button"
                                        onClick={handleWhatsAppSubmit}
                                        className="btn btn-whatsapp btn-block btn-lg"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        <span>Message Directly on WhatsApp</span>
                                        <span className="btn-arrow">↗</span>
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-outline btn-block"
                                        disabled={status === 'sending'}
                                    >
                                        {status === 'sending' ? (
                                            <span>Sending Inquiry...</span>
                                        ) : (
                                            <span>Or Submit via Form</span>
                                        )}
                                    </button>
                                </div>

                                {status === 'success' && (
                                    <div className="form-alert alert-success">
                                        <span className="alert-icon">✓</span>
                                        <span>Thank you! Your message has been received. Our team will contact you shortly.</span>
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="form-alert alert-error">
                                        <span className="alert-icon">⚠</span>
                                        <div className="alert-fallback-content">
                                            <p>Notice: Email delivery encountered an issue.</p>
                                            <a
                                                href={getWhatsAppHref(formData.message ? `Hello Neziz! Name: ${formData.from_name || 'Client'}, Phone: ${formData.from_contact || ''}, Details: ${formData.message}` : undefined)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="alert-whatsapp-link"
                                            >
                                                Click here to message on WhatsApp ({CONTACT_INFO.whatsappFormatted}) ↗
                                            </a>
                                        </div>
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
