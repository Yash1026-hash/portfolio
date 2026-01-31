import { Link } from 'react-router-dom';

export default function FeaturedCard() {
    return (
        <Link to="/achievements" className="card featured-card">
            <div className="card-content">
                <div className="featured-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    FEATURED
                </div>
                <h3 className="featured-title">Latest Achievement</h3>
                <p className="featured-desc">Smart India Hackathon 2025 Winner</p>
                <div className="featured-meta">
                    <span className="featured-tag">Competition</span>
                    <span className="featured-date">Jan 2025</span>
                </div>
                <div className="featured-cta">
                    View All Achievements
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}
