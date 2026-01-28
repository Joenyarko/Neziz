import React from 'react';


const WhyChooseUs = () => {
    const reasons = [
        {
            id: 1,
            title: 'Expert Expertise',
            icon: '🧠',
            description: 'Our team comprises certified professionals with deep industry knowledge and technical prowess.'
        },
        {
            id: 2,
            title: 'Custom Solutions',
            icon: '⚡',
            description: 'We don’t believe in one-size-fits-all. We build tailored strategies that align perfectly with your goals.'
        },
        {
            id: 3,
            title: 'Global Standards',
            icon: '🌍',
            description: 'We adhere to international best practices, ensuring your project is world-class and scalable.'
        },
        {
            id: 4,
            title: '24/7 Support',
            icon: '🛡️',
            description: 'We are always here for you. Our dedicated support team ensures your operations never skip a beat.'
        }
    ];

    return (
        <section className="why-choose-us-section">
            <div className="container">
                <div className="section-header center-text">
                    <span className="section-badge">OUR VALUES</span>
                    <h2 className="section-title">Why Choose Neziz?</h2>
                    <p className="section-subtitle">
                        We blend creativity with technology to deliver results that matter.
                    </p>
                </div>

                <div className="features-grid">
                    {reasons.map(reason => (
                        <div key={reason.id} className="feature-card glass-card">
                            <div className="feature-icon-wrapper">
                                <span className="feature-icon">{reason.icon}</span>
                            </div>
                            <h3 className="feature-title">{reason.title}</h3>
                            <p className="feature-desc">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
