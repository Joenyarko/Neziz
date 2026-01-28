import React from 'react';


const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Web Design / Web Development',
            icon: '💻', // Using emojis as placeholders, can be replaced with SVGs/Images
            description: 'Stunning, responsive websites tailored to your brand identity. We build high-performance digital experiences that convert visitors into loyal customers.'
        },
        {
            id: 2,
            title: 'Web Applications',
            icon: '🚀',
            description: 'Scalable and robust custom web applications. From internal tools to customer-facing platforms, we engineer solutions that streamline your business processes.'
        },
        {
            id: 3,
            title: 'IT Support',
            icon: '🛠️',
            description: 'Reliable technical support to keep your business running smoothly. We handle troubleshooting, maintenance, and system optimizations so you can focus on growth.'
        },
        {
            id: 4,
            title: 'Data Analysis',
            icon: '📊',
            description: 'Turn your data into actionable insights. We help you understand market trends and customer behavior to make informed, data-driven decisions.'
        },
        {
            id: 5,
            title: 'Digital Marketing',
            icon: '📢',
            description: 'Amplify your reach with targeted marketing strategies. We specialize in SEO, social media management, and content campaigns that drive engagement.'
        }
    ];

    return (
        <section className="services-page">
            <div className="container">
                <div className="services-header">
                    <span className="section-badge">WHAT WE DO</span>
                    <h2 className="section-title">Our Expertise</h2>
                    <p className="services-subtitle">
                        Comprehensive digital solutions designed to elevate your business in the modern landscape.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map(service => (
                        <div key={service.id} className="service-card glass-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
