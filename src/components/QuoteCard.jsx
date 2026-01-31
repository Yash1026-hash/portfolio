export default function QuoteCard() {
    return (
        <article className="card quote-card" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Japanese Wave Pattern - Left */}
            <svg
                viewBox="0 0 100 50"
                style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '150px',
                    height: '75px',
                    opacity: 0.06
                }}
            >
                <path d="M0 50 Q25 30 50 50 Q75 70 100 50" stroke="#FF4500" strokeWidth="2" fill="none" />
                <path d="M0 40 Q25 20 50 40 Q75 60 100 40" stroke="#FF4500" strokeWidth="2" fill="none" />
                <path d="M0 30 Q25 10 50 30 Q75 50 100 30" stroke="#FF4500" strokeWidth="2" fill="none" />
            </svg>

            {/* Indian Mandala Pattern - Right */}
            <svg
                viewBox="0 0 100 100"
                style={{
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '80px',
                    height: '80px',
                    opacity: 0.04
                }}
            >
                <circle cx="50" cy="50" r="45" stroke="#FFD700" strokeWidth="1" fill="none" />
                <circle cx="50" cy="50" r="35" stroke="#FFD700" strokeWidth="1" fill="none" />
                <circle cx="50" cy="50" r="25" stroke="#FFD700" strokeWidth="1" fill="none" />
                <circle cx="50" cy="50" r="15" stroke="#FFD700" strokeWidth="1" fill="none" />
                {/* Petals */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <ellipse
                        key={angle}
                        cx="50"
                        cy="15"
                        rx="8"
                        ry="12"
                        stroke="#FFD700"
                        strokeWidth="0.5"
                        fill="none"
                        transform={`rotate(${angle} 50 50)`}
                    />
                ))}
            </svg>

            <div className="card-content" style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                padding: '16px 24px',
                minHeight: 'auto'
            }}>
                <p className="font-display" style={{
                    fontSize: '14px',
                    fontStyle: 'italic',
                    color: 'rgba(232,232,227,0.9)',
                    letterSpacing: '0.05em'
                }}>
                    "CODE IS POETRY WRITTEN FOR MACHINES."
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <div style={{ width: '32px', height: '2px', backgroundColor: '#FF4500', marginBottom: '6px' }}></div>
                    <span className="text-muted-text" style={{ fontSize: '10px' }}>Yashwanth</span>
                </div>
            </div>
        </article>
    )
}
