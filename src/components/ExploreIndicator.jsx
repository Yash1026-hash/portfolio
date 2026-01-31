import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ExploreIndicator() {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    const [hasScrolled, setHasScrolled] = useState(false);

    // Only show on home page
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setHasScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hide after 8 seconds or after scrolling
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 8000);
        return () => clearTimeout(timer);
    }, []);

    if (!isHomePage || !isVisible || hasScrolled) return null;

    return (
        <div className="explore-indicator">
            <div className="explore-indicator-content">
                <span className="explore-indicator-text">Discover More</span>
                <div className="explore-indicator-arrows">
                    <Link to="/projects" className="explore-arrow-link">
                        <span>Projects</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                    <Link to="/videos" className="explore-arrow-link">
                        <span>Videos</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
            <button className="explore-dismiss" onClick={() => setIsVisible(false)}>×</button>
        </div>
    );
}
