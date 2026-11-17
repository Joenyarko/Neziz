import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    from_phone: '',
    subject: 'Web Developer Opportunity',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error', 'simulated_test'

  const validate = () => {
    const newErrors = {};
    if (!formData.from_name.trim() || formData.from_name.trim().length < 2) {
      newErrors.from_name = 'Please provide your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.from_email.trim() || !emailRegex.test(formData.from_email.trim())) {
      newErrors.from_email = 'Please provide a valid email address (e.g. name@domain.com).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a brief message (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('sending');

    // Safe Test Check: If the email ends with @example.com or @test.com,
    // execute safe test verification without spamming external email networks.
    if (formData.from_email.endsWith('@example.com') || formData.from_email.endsWith('@test.com')) {
      setTimeout(() => {
        setStatus('simulated_test');
        setTimeout(() => setStatus(''), 7000);
      }, 500);
      return;
    }

    // EmailJS production send with strict promise resolution
    // Service ID: service_15qt7u9
    // Template ID: template_77bb575
    // Public Key: RnDMjpS3SRn79Wa_d
    emailjs.sendForm('service_15qt7u9', 'template_77bb575', form.current, 'RnDMjpS3SRn79Wa_d')
      .then((result) => {
        if (result && (result.status === 200 || result.text === 'OK')) {
          setStatus('success');
          setFormData({
            from_name: '',
            from_email: '',
            from_phone: '',
            subject: 'Web Developer Opportunity',
            message: ''
          });
          setTimeout(() => setStatus(''), 7000);
        } else {
          setStatus('error');
        }
      })
      .catch((error) => {
        console.error('Email delivery error:', error);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="section contact-section" aria-label="Contact Information and Inquiries">
      <div className="container">
        <div className="contact-grid-layout">
          {/* Left Column: Direct Recruiter Contact Information */}
          <div className="contact-info-col">
            <span className="eyebrow">RECRUITER & CLIENT CONTACT</span>
            <h2 className="section-title">
              Let's Discuss Web Developer <em>Opportunities</em>
            </h2>
            <p className="contact-lead-text">
              I am open to web developer positions, frontend roles, and contract client projects. Connect with me directly through phone, email, or LinkedIn.
            </p>

            <div className="contact-cards-list">
              {/* Primary Phone */}
              <div className="contact-info-card card">
                <div className="info-icon-box" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Primary Recruiter Phone</span>
                  <a href="tel:+233242528504" className="info-value-link" aria-label="Call primary recruiter phone: +233242528504">
                    +233 24 252 8504
                  </a>
                  <span className="info-sub-note">Direct call & WhatsApp</span>
                </div>
              </div>

              {/* Alternate Phone */}
              <div className="contact-info-card card">
                <div className="info-icon-box" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                    <path d="M12 18h.01"/>
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Alternate Phone</span>
                  <a href="tel:+233501354521" className="info-value-link" aria-label="Call alternate phone: +233501354521">
                    +233 50 135 4521
                  </a>
                  <span className="info-sub-note">Alternate mobile line</span>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-card card">
                <div className="info-icon-box" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Direct Email</span>
                  <a href="mailto:joenyarko2001@gmail.com" className="info-value-link" aria-label="Send email to joenyarko2001@gmail.com">
                    joenyarko2001@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="contact-info-card card">
                <div className="info-icon-box" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">LinkedIn Profile</span>
                  <a 
                    href="https://www.linkedin.com/in/joenyarko/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="info-value-link"
                    aria-label="Visit Joe Nyarko's LinkedIn profile at linkedin.com/in/joenyarko/ (opens in new tab)"
                  >
                    linkedin.com/in/joenyarko/
                  </a>
                  <span className="info-sub-note">Verified primary LinkedIn link</span>
                </div>
              </div>

              {/* Location */}
              <div className="contact-info-card card">
                <div className="info-icon-box" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Location</span>
                  <span className="info-value-text">Mamprobi, Accra, Ghana</span>
                  <span className="info-sub-note">Available for on-site & remote roles</span>
                </div>
              </div>
            </div>

            {/* CV Download Status Note */}
            <div className="cv-policy-notice card-surface">
              <span className="policy-icon" aria-hidden="true">📄</span>
              <div className="policy-text">
                <strong>Curriculum Vitae:</strong> Official CV file is available upon request during recruiter screening. Contact me directly to receive the updated document.
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form with Strict Validation */}
          <div className="contact-form-col">
            <div className="contact-form-card card">
              <div className="form-card-header">
                <h3 className="form-card-title">Send a Direct Message</h3>
                <p className="form-card-sub">
                  Fill in your details below. For urgent recruiter queries, please call or email directly.
                </p>
              </div>

              <form ref={form} onSubmit={sendEmail} className="project-contact-form" noValidate>
                <div className="form-field-row">
                  <div className="form-field">
                    <label htmlFor="from_name">
                      Your Name <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="from_name" 
                      id="from_name" 
                      value={formData.from_name}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe" 
                      required
                      aria-invalid={errors.from_name ? 'true' : 'false'}
                      aria-describedby={errors.from_name ? 'from_name_error' : undefined}
                    />
                    {errors.from_name && (
                      <span id="from_name_error" className="field-error-text" role="alert">
                        {errors.from_name}
                      </span>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="from_email">
                      Your Email <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="from_email" 
                      id="from_email" 
                      value={formData.from_email}
                      onChange={handleChange}
                      placeholder="jane@company.com" 
                      required
                      aria-invalid={errors.from_email ? 'true' : 'false'}
                      aria-describedby={errors.from_email ? 'from_email_error' : undefined}
                    />
                    {errors.from_email && (
                      <span id="from_email_error" className="field-error-text" role="alert">
                        {errors.from_email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-field-row">
                  <div className="form-field">
                    <label htmlFor="from_phone">Phone Number (Optional)</label>
                    <input 
                      type="tel" 
                      name="from_phone" 
                      id="from_phone" 
                      value={formData.from_phone}
                      onChange={handleChange}
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="subject">Subject / Purpose</label>
                    <input 
                      type="text" 
                      name="subject" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Job Opportunity, Project, etc."
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">
                    Message <span className="required-star" aria-hidden="true">*</span>
                  </label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the role or project requirements..." 
                    required
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message_error' : undefined}
                  ></textarea>
                  {errors.message && (
                    <span id="message_error" className="field-error-text" role="alert">
                      {errors.message}
                    </span>
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
                      <span>Submit Message</span>
                      <span className="btn-arrow" aria-hidden="true">→</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="form-alert alert-success" role="status">
                    <span className="alert-icon" aria-hidden="true">✓</span>
                    <span>Thank you! Your message has been sent successfully. I will review it and reply promptly.</span>
                  </div>
                )}

                {status === 'simulated_test' && (
                  <div className="form-alert alert-success" role="status">
                    <span className="alert-icon" aria-hidden="true">🧪</span>
                    <span>Safe Test Mode Verified: Form fields validated successfully without external delivery.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="form-alert alert-error" role="alert">
                    <span className="alert-icon" aria-hidden="true">⚠</span>
                    <span>
                      Unable to deliver message automatically. Please contact me directly at{' '}
                      <a href="mailto:joenyarko2001@gmail.com" style={{ textDecoration: 'underline' }}>
                        joenyarko2001@gmail.com
                      </a>{' '}
                      or call{' '}
                      <a href="tel:+233242528504" style={{ textDecoration: 'underline' }}>
                        +233242528504
                      </a>.
                    </span>
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
