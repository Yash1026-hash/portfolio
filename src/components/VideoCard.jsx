import { Link } from 'react-router-dom';

export default function VideoCard() {
    return (
        <Link to="/videos" className="card video-card">
            {/* Background Image */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url(/backup/video1.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            {/* Dark Overlay */}
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />

            <div className="card-content vertical-layout">
                {/* Text */}
                <div className="video-text-container">
                    <span className="text-marigold video-label">Creative</span>
                    <span className="video-title-text">Video Work</span>
                </div>

                {/* Play Button */}
                <div className="play-button-container">
                    <div className="play-circle">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="play-icon">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    )
}
