import React from 'react';
import { Link } from 'react-router-dom';
import { TEAM_MEMBERS, HOMEPAGE_TEASER_COPY } from '../data/team';

const TeamTeaser = () => {
    return (
        <section className="section team-teaser-section">
            <div className="container">
                <div className="team-teaser-card card">
                    <div className="team-teaser-content">
                        <span className="eyebrow eyebrow-blue">{HOMEPAGE_TEASER_COPY.eyebrow}</span>
                        <h2 className="team-teaser-heading">
                            {HOMEPAGE_TEASER_COPY.heading}
                        </h2>
                        <div className="team-teaser-avatars-row">
                            <div className="team-teaser-avatars">
                                {TEAM_MEMBERS.map(member => (
                                    <img
                                        key={member.id}
                                        src={member.image}
                                        alt={member.name}
                                        className="teaser-avatar"
                                        title={`${member.name} (${member.role})`}
                                    />
                                ))}
                            </div>
                            <span className="team-teaser-caption">
                                Joseph Nyarko (Founder) &amp; Fitzgerald Quaye (Co-Founder)
                            </span>
                        </div>
                    </div>
                    <div className="team-teaser-action">
                        <Link to={HOMEPAGE_TEASER_COPY.linkUrl} className="btn btn-primary btn-lg">
                            <span>{HOMEPAGE_TEASER_COPY.linkText}</span>
                            <span className="btn-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamTeaser;
