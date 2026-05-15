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
                        <div>Engineer</div>
                    </div>
                </div>

                {/* Profile Section */}
                <div style={{ display: 'flex', alignItems: 'center', gap
                    
                    
                    : '20px', margin: '24px 0' }}>
                    <img
                        src="/PPF.jpeg?v=2"
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
                            ECE (VLSI) Undergraduate | AI & Embedded Systems
                        </p>
                        <p className="text-muted-text" style={{ fontSize: '12px', marginTop: '8px', lineHeight: 1.5, maxWidth: '280px' }}>
                            Passionate about autonomous systems, VLSI design, and embedded solutions. 2× Hackathon Winner. IEEE ComSoc Treasurer.
                        </p>
                    </div>
                </div>

                {/* Footer with Location, Time, and Resume */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }} className="text-muted-text">
                        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" fill="none" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>India <span className="text-vermilion" style={{ margin: '0 4px' }}>/</span> {time}</span>
                    </div>
                    <a
                        href="/resume.pdf"
                        download="Kamsani_Yashwanth_Resume.pdf"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '8px 14px',
                            backgroundColor: 'rgba(255, 69, 0, 0.15)',
                            border: '1px solid rgba(255, 69, 0, 0.3)',
                            borderRadius: '8px',
                            color: '#FF4500',
                            fontSize: '12px',
                            fontWeight: 500,
                            textDecoration: 'none',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Resume
                    </a>
                </div>
            </div>
        </article>
    )
}
