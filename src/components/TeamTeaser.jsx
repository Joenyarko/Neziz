import React from 'react';
import { Link } from 'react-router-dom';
import { HOMEPAGE_TEASER_COPY } from '../data/team';

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
