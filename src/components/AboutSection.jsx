import React from 'react';


const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-header">
                    <span className="section-badge">WHO WE ARE</span>
                    <h2 className="section-title">Innovating for the Future</h2>
                </div>

                <div className="about-grid">
                    <div className="about-card glass-card">
                        <h3>Our Mission</h3>
                        <p>
                            To empower businesses with cutting-edge, low-code software solutions that drive growth and efficiency.
                            We bridge the gap between complex technology and user-friendly experiences.
                        </p>
                    </div>

                    <div className="about-card glass-card">
                        <h3>Why Choose Neziz?</h3>
                        <p>
                            We combine aesthetic excellence with robust engineering. Our global team delivers
                            tailored solutions that not only look stunning but perform flawlessly at scale.
                        </p>
                    </div>

                    <div className="about-card glass-card">
                        <h3>Our Approach</h3>
                        <p>
                            Collaboration is at our core. We work closely with our clients to transform their vision
                            into digital reality, ensuring every pixel and line of code serves a purpose.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
