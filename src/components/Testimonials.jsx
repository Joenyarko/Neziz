import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Kofi Mensah',
            role: 'Managing Director, Adroit Cloud',
            initials: 'KM',
            bg: '#EFF6FF',
            color: '#1D4ED8',
            rating: 5,
            tag: 'Enterprise ERP Implementation',
            text: 'Neziz delivered an outstanding overhaul of our cloud platform and portal architecture. Their deep engineering understanding of enterprise workflows, data integrity, and UI responsiveness transformed our client onboarding.'
        },
        {
            id: 2,
            name: 'Sarah Jenkins',
            role: 'Head of Operations, FinEdge Capital',
            initials: 'SJ',
            bg: '#FEF2F2',
            color: '#B91C1C',
            rating: 5,
            tag: 'AI Bank Reconciliation Engine',
            text: 'The automated bank reconciliation system engineered by Neziz cut our daily reconciliation cycle from several tedious hours to mere minutes. Their precision, documentation, and continuous post-launch support were impeccable.'
        },
        {
            id: 3,
            name: 'Dr. Michael Chen',
            role: 'Executive Director, Global Health Initiative',
            initials: 'MC',
            bg: '#F0FDF4',
            color: '#15803D',
            rating: 5,
            tag: 'Web Platform & Donor Systems',
            text: 'Working with the Neziz team was a breath of fresh air. They treated our NGO mission with urgency, crafting an accessible, secure platform that increased international contributions by over 300% in the first quarter.'
        }
    ];

    return (
        <section className="section testimonials-section">
            <div className="container">
                <div className="center-text">
                    <span className="eyebrow">CLIENT TESTIMONIALS</span>
                    <h2 className="section-title">Trusted by Visionaries & <em>Enterprise Leaders</em></h2>
                    <p className="section-subtitle">
                        Here is what technology executives and business founders say about partnering with Neziz to build their mission-critical digital systems.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card card card-hover">
                            <div className="testimonial-header">
                                <div className="stars-row">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="star-icon">★</span>
                                    ))}
                                </div>
                                <span className="testimonial-tag">{testimonial.tag}</span>
                            </div>

                            <p className="testimonial-quote">
                                "{testimonial.text}"
                            </p>

                            <div className="testimonial-author">
                                <div 
                                    className="author-avatar"
                                    style={{ backgroundColor: testimonial.bg, color: testimonial.color }}
                                >
                                    {testimonial.initials}
                                </div>
                                <div className="author-meta">
                                    <h4 className="author-name">{testimonial.name}</h4>
                                    <div className="author-role-row">
                                        <span className="author-role-title">{testimonial.role}</span>
                                        <span className="verified-badge">✓ Verified Client</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
