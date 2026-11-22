import React from 'react';
import { TEAM_MEMBERS, TEAM_SECTION_COPY } from '../data/team';

const TeamSection = () => {
    return (
        <section id="team" className="section team-section">
            <div className="container">
                <div className="center-text">
                    <span className="eyebrow">{TEAM_SECTION_COPY.eyebrow}</span>
                    <h2 className="section-title">{TEAM_SECTION_COPY.title}</h2>
                    <p className="section-subtitle">
                        {TEAM_SECTION_COPY.subtitle}
                    </p>
                </div>

                <div className="team-cards-grid">
                    {TEAM_MEMBERS.map((member) => (
                        <div key={member.id} className="team-member-card card">
                            {member.image ? (
                                <div className="team-member-photo-frame">
                                    <img 
                                        src={member.image} 
                                        alt={member.name} 
                                        className="team-member-photo" 
                                    />
                                </div>
                            ) : (
                                <div className="team-member-avatar-placeholder">
                                    <span>{member.initials}</span>
                                </div>
                            )}
                            <div className="team-member-header">
                                <div className="team-member-meta">
                                    <h3 className="team-member-name">{member.name}</h3>
                                    <span className="team-member-role">{member.role}</span>
                                </div>
                            </div>
                            <p className="team-member-bio">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
