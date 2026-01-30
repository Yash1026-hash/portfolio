export default function VideoCard() {
    return (
        <a href="#videos" className="card video-card">
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
                {/* Vertical Text */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'rgba(232,232,227,0.9)',
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)'
                    }}
                >
                    <span className="font-jp text-marigold" style={{ fontSize: '12px', letterSpacing: '3px' }}>クリエイティブ</span>
                    <span style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>Video Work</span>
                </div>

                {/* Play Button */}
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'rgba(232,232,227,0.1)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px', color: '#e8e8e3', marginLeft: '4px' }}>
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    </div>
                </div>
            </div>
        </a>
    )
}
