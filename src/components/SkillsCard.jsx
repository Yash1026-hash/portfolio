export default function SkillsCard() {
    const skills = [
        {
            name: 'React',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '16px', height: '16px' }}>
                    <circle cx="12" cy="12" r="3"></circle>
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"></ellipse>
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"></ellipse>
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"></ellipse>
                </svg>
            )
        },
        {
            name: 'Python',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '16px', height: '16px' }}>
                    <path d="M12 2c-1.7 0-3 1.3-3 3v4c0 1.7-1.3 3-3 3H4c-1.1 0-2 .9-2 2v2c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-2c0-1.1-.9-2-2-2h-2c-1.7 0-3-1.3-3-3V5c0-1.7-1.3-3-3-3z"></path>
                    <circle cx="9" cy="6" r="1" fill="currentColor"></circle>
                    <circle cx="15" cy="18" r="1" fill="currentColor"></circle>
                </svg>
            )
        },
        {
            name: 'AI/ML',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '16px', height: '16px' }}>
                    <rect x="3" y="8" width="18" height="12" rx="2"></rect>
                    <circle cx="9" cy="14" r="2"></circle>
                    <circle cx="15" cy="14" r="2"></circle>
                    <path d="M9 8V6a3 3 0 0 1 6 0v2"></path>
                </svg>
            )
        },
        {
            name: 'Quantum',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '16px', height: '16px' }}>
                    <circle cx="12" cy="12" r="3"></circle>
                    <circle cx="12" cy="12" r="8"></circle>
                    <line x1="12" y1="2" x2="12" y2="6"></line>
                    <line x1="12" y1="18" x2="12" y2="22"></line>
                    <line x1="2" y1="12" x2="6" y2="12"></line>
                    <line x1="18" y1="12" x2="22" y2="12"></line>
                </svg>
            )
        }
    ]

    return (
        <article className="card skills-card">
            <div className="card-content">
                <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 600 }}>Tech Stack</h4>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '8px',
                    marginTop: '12px'
                }}>
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: '8px',
                                padding: '10px 14px',
                                backgroundColor: 'rgba(255, 69, 0, 0.08)',
                                borderRadius: '8px',
                                fontSize: '12px',
                                color: 'rgba(232,232,227,0.9)'
                            }}
                        >
                            <span style={{
                                width: '16px',
                                height: '16px',
                                flexShrink: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#FF4500'
                            }}>{skill.icon}</span>
                            <span style={{ fontWeight: 500 }}>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}
