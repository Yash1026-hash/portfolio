export default function AboutCard() {
    return (
        <article className="card about-card">
            <div className="card-content">
                <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 600 }}>Student Leadership</h4>
                    <span className="font-hi text-vermilion" style={{ fontSize: '12px' }}>नेतृत्व</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px' }}>
                        <span className="text-muted-text" style={{ fontFamily: 'monospace', width: '32px' }}>2025</span>
                        <span style={{ color: 'rgba(232,232,227,0.8)' }}>Tech Club President</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px' }}>
                        <span className="text-muted-text" style={{ fontFamily: 'monospace', width: '32px' }}>2024</span>
                        <span style={{ color: 'rgba(232,232,227,0.8)' }}>Student Council</span>
                    </div>
                </div>
            </div>
        </article>
    )
}
