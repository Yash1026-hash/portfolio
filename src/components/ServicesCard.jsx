import { Link } from 'react-router-dom';

export default function ServicesCard() {
    return (
        <Link to="/contact" className="card services-card">
            <div className="services-banner-content">
                <span className="services-badge">HIRE ME</span>
                <span className="services-title">Freelance Available</span>
                <span className="services-desc">Software Dev • VLSI Design • Video Editing • AI/ML</span>
            </div>
        </Link>
    );
}
