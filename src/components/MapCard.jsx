import { Link } from 'react-router-dom';

export default function MapCard() {
    return (
        <Link to="/contact" className="card map-card">
            <div className="card-content centered" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Rotating Text */}
                    <svg viewBox="0 0 100 100" className="animate-spin" style={{ width: '80px', height: '80px' }}>
                        <defs>
                            <path id="circlePath" d="M 50 50 m -35 0 a 35 35 0 1 1 70 0 a 35 35 0 1 1 -70 0" fill="none" />
                        </defs>
                        <text style={{ fontSize: '9px', fill: '#888890', textTransform: 'uppercase', letterSpacing: '3px' }}>
                            <textPath href="#circlePath">CONTACT • GET IN TOUCH • </textPath>
                        </text>
                    </svg>
                    {/* Mail Icon */}
                    <div style={{ position: 'absolute', fontSize: '20px' }}>✉️</div>
                </div>
            </div>
        </Link>
    )
}
