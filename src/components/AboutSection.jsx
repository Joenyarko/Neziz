import React from 'react';
import { Link } from 'react-router-dom';
import { coreSkills, supportingBackground } from '../data/skillsData';

const AboutSection = () => {
  return (
    <section id="about" className="section about-section" aria-label="About Joe Nyarko">
      <div className="container">
        {/* Header */}
        <div className="center-text">
          <span className="eyebrow">ABOUT JOE NYARKO</span>
          <h2 className="section-title">
            Web Developer Building Practical <em>Client Solutions</em>
          </h2>
          <p className="section-subtitle">
            Based in Mamprobi, Accra, Ghana. Focused on crafting accessible, responsive websites and frontend applications with verified code delivery.
          </p>
        </div>

        {/* Narrative & Practical Background Split */}
        <div className="about-split-layout">
          <div className="about-narrative-col">
            <span className="eyebrow eyebrow-blue">BACKGROUND & APPROACH</span>
            <h3 className="narrative-heading">
              Practical web development grounded in clean code, responsive layouts, and honest delivery.
            </h3>
            
            <p className="narrative-p">
              I am a web developer with hands-on experience building client websites, e-commerce storefronts, and interactive web tools. My work has evolved through independent builds, projects for friends and family businesses, collaborative third-party deliveries, and self-directed software development.
            </p>

            <p className="narrative-p">
              Rather than claiming unevidenced corporate milestones, I prioritize transparent craftsmanship: writing semantic HTML that screen readers can parse, crafting clean CSS that holds up from 320px mobile screens to large desktop monitors, and integrating functional React and backend code.
            </p>

            {/* Core Values / Work Principles */}
            <div className="about-principles-list">
              <div className="principle-item">
                <span className="principle-icon" aria-hidden="true">✓</span>
                <div>
                  <strong>Semantic & Accessible First:</strong> Form inputs with explicit labels, logical heading hierarchies, and keyboard-operable menus.
                </div>
              </div>

              <div className="principle-item">
                <span className="principle-icon" aria-hidden="true">✓</span>
                <div>
                  <strong>Mobile-First Responsiveness:</strong> Thoroughly tested on actual mobile viewports (320px–390px) to prevent horizontal overflow and broken tap targets.
                </div>
              </div>

              <div className="principle-item">
                <span className="principle-icon" aria-hidden="true">✓</span>
                <div>
                  <strong>Honest Scope & Verification:</strong> Direct about what I personally built vs. client systems, with case studies detailing confirmed stack and testing.
                </div>
              </div>
            </div>
          </div>

          {/* Core Technical Strengths */}
          <div className="about-tech-focus-col">
            <div className="tech-focus-card card">
              <span className="eyebrow eyebrow-blue">CORE WEB STACK</span>
              <h3 className="tech-focus-heading">Technologies Applied in Code</h3>
              <p className="tech-focus-sub">
                Specific skills demonstrated across verified candidate projects:
              </p>

              <div className="skills-evidence-list">
                {coreSkills.map((skill) => (
                  <div key={skill.name} className="skill-evidence-card">
                    <div className="skill-header">
                      <span className="skill-name-pill">{skill.name}</span>
                      <span className="skill-fullname">{skill.fullName}</span>
                    </div>
                    <p className="skill-description">{skill.description}</p>
                    <div className="skill-evidence-box">
                      <span className="evidence-label">Project Evidence:</span>
                      <ul className="evidence-bullet-list">
                        {skill.projectEvidence.map((ev, i) => (
                          <li key={i}>{ev}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Background Section (Data Analysis & Virtual Assistance) */}
        <div className="supporting-background-section">
          <div className="center-text supporting-header">
            <span className="eyebrow">SUPPORTING BACKGROUND</span>
            <h3 className="supporting-title">Complementary Problem-Solving Capabilities</h3>
            <p className="supporting-sub">
              Experience in data organization, analytical accuracy, and virtual administrative support that strengthens day-to-day web development workflows.
            </p>
          </div>

          <div className="supporting-cards-grid">
            {supportingBackground.map((item, idx) => (
              <div key={idx} className="supporting-card card card-hover">
                <div className="supporting-card-top">
                  <span className="badge badge-gray">{item.role}</span>
                  <span className="supporting-card-icon" aria-hidden="true">
                    {item.title.includes('Data') ? '📊' : '💼'}
                  </span>
                </div>
                <h4 className="supporting-card-title">{item.title}</h4>
                <p className="supporting-card-summary">{item.summary}</p>
                <div className="supporting-card-evidence">
                  <strong>Practical Application:</strong> {item.evidence}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transparent Recruiter Footnote */}
        <div className="about-cta-strip card-surface">
          <div className="about-cta-text">
            <h3>Ready to review project code or schedule a technical chat?</h3>
            <p>
              I am open to web developer positions, frontend roles, and contract web engineering opportunities.
            </p>
          </div>
          <div className="about-cta-action">
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span>Contact Joe Nyarko</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
