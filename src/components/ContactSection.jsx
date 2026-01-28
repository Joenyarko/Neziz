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
                form.current.reset(); // Clear form on success
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <div className="contact-content">
                    <span className="section-badge">CONTACT US</span>
                    <h2 className="section-title">Let's Build Something<br />Great Together</h2>
                    <p className="contact-desc">
                        Ready to start your next project? Get in touch with us today
                        and let's discuss how we can help your business grow.
                    </p>

                    <div className="contact-details">
                        <div className="detail-item">
                            <span className="detail-label">Email</span>
                            <a href="mailto:joenyarko2001@gmail.com" className="detail-value">joenyarko2001@gmail.com</a>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Phone</span>
                            <a href="tel:0242528504" className="detail-value">0242528504</a>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Location</span>
                            <span className="detail-value">Mamprobi, Accra</span>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper glass-card">
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <input type="hidden" name="subject" value="Neziz Digital Solutions" />
                        <div className="form-group">
                            <label htmlFor="from_name">Name</label>
                            <input type="text" name="from_name" id="from_name" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="from_email">Email</label>
                            <input type="email" name="from_email" id="from_email" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="from_contact">Phone Number</label>
                            <input type="tel" name="from_contact" id="from_contact" placeholder="+233 XX XXX XXXX" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="4" placeholder="Tell us about your project..." required></textarea>
                        </div>

                        <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
                        {status === 'error' && <p className="error-msg">Failed to send. Please try again.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
