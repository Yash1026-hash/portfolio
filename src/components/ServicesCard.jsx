import { Link } from 'react-router-dom';

export default function ServicesCard() {
    return (
        <Link to="/contact" className="card services-card">
            <div className="services-banner-content">
                <span className="services-badge">HIRE ME</span>
                <span className="services-title">Freelance Services</span>
                <span className="services-desc">Research • Development • Video Production</span>
            </div>
        </Link>
    );
}
