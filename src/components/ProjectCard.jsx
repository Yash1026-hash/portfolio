import { Link } from 'react-router-dom';

export default function ProjectCard({ className, image, category, year, title }) {
    return (
        <Link to="/projects" className={`card ${className}`} style={{ cursor: 'pointer' }}>
            {/* Background Image */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.5s ease'
                }}
                className="project-bg"
            />
            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)'
            }} />

            <div className="card-content">
                {/* Category Tag */}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    <span className="text-vermilion" style={{ fontWeight: 500 }}>{category}</span>
                    <span className="text-muted-text">{year}</span>
                </div>

                {/* Title at Bottom */}
                <div style={{ marginTop: 'auto' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '4px' }}>{title}</h3>
                    <div style={{ fontSize: '18px', marginTop: '8px', color: 'rgba(232,232,227,0.6)' }}>→</div>
                </div>
            </div>
        </Link>
    )
}
