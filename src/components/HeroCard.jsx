import { useState, useEffect } from 'react'

export default function HeroCard() {
    const [time, setTime] = useState('')

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const options = {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }
            const timeString = now.toLocaleTimeString('en-US', options)
            setTime(timeString + ' IST')
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <article className="card hero-card">
            <div className="card-content">
                {/* Top Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 12px',
                        backgroundColor: 'rgba(255, 69, 0, 0.2)',
                        border: '1px solid rgba(255, 69, 0, 0.3)',
                        borderRadius: '20px'
                    }}>
                        <span style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: '#FF4500',
                            borderRadius: '50%',
                            animation: 'pulse 2s infinite'
                        }}></span>
                        <span style={{ fontSize: '12px', color: '#e8e8e3' }}>Available for Research</span>
                    </div>
                    <div style={{ textAlign: 'right', fontSize: '12px', color: '#888890', opacity: 0.7 }}>
                        <div className="font-jp">エンジニア</div>
                        <div className="font-hi">अभियंता</div>
                    </div>
                </div>

                {/* Profile Section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '24px 0' }}>
                    <img
                        src="/backup/profile_zen.jpg"
                        alt="Profile"
                        style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '2px solid rgba(255,255,255,0.1)'
                        }}
                    />
                    <div>
                        <h1 style={{ fontSize: '1.6rem', fontWeight: 600, letterSpacing: '-0.025em' }}>
                            Kamsani Yashwanth Chowdhary <span className="text-vermilion">.</span>
                        </h1>
                        <p className="text-marigold" style={{ fontWeight: 500, fontSize: '14px', marginTop: '4px' }}>
                            Engineering Student & Researcher
                        </p>
                        <p className="text-muted-text" style={{ fontSize: '12px', marginTop: '8px', lineHeight: 1.5, maxWidth: '280px' }}>
                            Bridging technology and culture. Exploring the intersection of AI, Quantum Computing, and Design.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', marginTop: 'auto' }} className="text-muted-text">
                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" fill="none" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>India <span className="text-vermilion" style={{ margin: '0 4px' }}>/</span> {time}</span>
                </div>
            </div>
        </article>
    )
}
