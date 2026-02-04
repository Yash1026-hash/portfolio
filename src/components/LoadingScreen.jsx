import { useEffect, useState } from 'react';

export default function LoadingScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Start fade after content loads
        const timer = setTimeout(() => {
            setIsFading(true);
            setTimeout(() => setIsVisible(false), 500);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`loading-screen ${isFading ? 'fade-out' : ''}`}>
            <div className="enso-container">
                {/* Outer Ring - Digital Enso */}
                <div className="enso-ring">
                    <svg viewBox="0 0 100 100" className="enso-svg">
                        <defs>
                            <linearGradient id="ensoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="var(--color-vermilion)" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="var(--color-marigold)" stopOpacity="0.8" />
                            </linearGradient>
                        </defs>
                        {/* Tech segments */}
                        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                        <path
                            d="M 50 5 A 45 45 0 0 1 95 50"
                            fill="none"
                            stroke="url(#ensoGradient)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            className="enso-arc-1"
                        />
                        <path
                            d="M 50 95 A 45 45 0 0 1 5 50"
                            fill="none"
                            stroke="url(#ensoGradient)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            className="enso-arc-2"
                        />
                        {/* Inner dots */}
                        <circle cx="50" cy="5" r="2" fill="var(--color-vermilion)" className="enso-dot" />
                        <circle cx="50" cy="95" r="2" fill="var(--color-marigold)" className="enso-dot" />
                    </svg>
                </div>

                {/* Center Logo - Torii Gate x Lotus (Indo-Japanese) */}
                <div className="enso-center">
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" stroke="var(--color-paper-white)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        {/* Torii Gate (Japanese) */}
                        <path d="M20 35 H80" className="logo-stroke-1" /> {/* Top bar */}
                        <path d="M25 45 H75" className="logo-stroke-2" /> {/* Lower bar */}
                        <path d="M35 35 V75" className="logo-stroke-3" /> {/* Left post */}
                        <path d="M65 35 V75" className="logo-stroke-3" /> {/* Right post */}

                        {/* Lotus Base (Indian) */}
                        <path d="M35 75 Q50 90 65 75" className="logo-stroke-4" /> {/* Base curve */}
                        <path d="M50 75 V85" className="logo-stroke-5" /> {/* Stem */}
                        <circle cx="50" cy="25" r="4" fill="var(--color-vermilion)" stroke="none" className="logo-dot" />
                    </svg>
                </div>

                {/* Tech Deco */}
                <div className="loading-status">
                    <span className="status-text-jp">システム起動中</span>
                    <div className="loading-bar">
                        <div className="loading-bar-fill" />
                    </div>
                </div>
            </div>
        </div>
    );
}
