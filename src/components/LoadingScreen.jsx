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
            <div className="loading-content">
                {/* Logo */}
                <div className="loading-logo">
                    <span className="logo-y">Y</span>
                    <span className="logo-c">C</span>
                </div>

                {/* Spinner */}
                <div className="loading-spinner">
                    <svg viewBox="0 0 50 50">
                        <circle
                            cx="25"
                            cy="25"
                            r="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeDasharray="80, 200"
                            strokeDashoffset="0"
                        />
                    </svg>
                </div>

                {/* Text */}
                <p className="loading-text">Loading portfolio...</p>
            </div>
        </div>
    );
}
