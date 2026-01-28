import React from 'react';


const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'CEO at FinTech Corp',
            image: 'https://placehold.co/100x100/1e1e2e/00d4ff?text=SJ',
            text: 'Neziz completely transformed our digital presence. Their attention to detail and ability to deliver on time was impressive.'
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Founder, EcoStart',
            image: 'https://placehold.co/100x100/1e1e2e/00d4ff?text=MC',
            text: 'The team understood our vision immediately. The web application they built has streamlined our operations by 200%.'
        },
        {
            id: 3,
            name: 'Emily Davis',
            role: 'Marketing Director',
            image: 'https://placehold.co/100x100/1e1e2e/00d4ff?text=ED',
            text: 'Professional, creative, and reliable. Working with Neziz was a game-changer for our marketing campaigns.'
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="section-header center-text">
                    <span className="section-badge">TESTIMONIALS</span>
                    <h2 className="section-title">What People Say</h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card glass-card">
                            <div className="quote-icon">“</div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="testimonial-author">
                                <img src={testimonial.image} alt={testimonial.name} className="author-img" />
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.name}</h4>
                                    <span className="author-role">{testimonial.role}</span>
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
