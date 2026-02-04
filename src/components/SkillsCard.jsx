export default function SkillsCard() {
    const skills = [
        {
            name: 'VLSI',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '16px', height: '16px' }}>
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <path d="M4 12h16M12 4v16"></path>
                    <circle cx="8" cy="8" r="1" fill="currentColor"></circle>
                    <circle cx="16" cy="8" r="1" fill="currentColor"></circle>
                    <circle cx="8" cy="16" r="1" fill="currentColor"></circle>
                    <circle cx="16" cy="16" r="1" fill="currentColor"></circle>
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
                </svg>
            )
        },
        {
            name: 'Video Edit',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '16px', height: '16px' }}>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <polygon points="10 9 16 12 10 15 10 9" fill="currentColor"></polygon>
                </svg>
            )
        }
    ]

    return (
        <article className="card skills-card">
            <div className="card-content">
                <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 600 }}>Expertise</h4>
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
