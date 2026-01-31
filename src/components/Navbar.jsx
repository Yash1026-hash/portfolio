import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const [showHint, setShowHint] = useState(true);

    // Hide hint after user navigates
    useEffect(() => {
        if (location.pathname !== '/') {
            setShowHint(false);
        }
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/projects', label: 'Projects' },
        { path: '/videos', label: 'Videos' },
        { path: '/achievements', label: 'Achievements' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-content">
                {/* Logo / Name */}
                <Link to="/" className="navbar-logo">
                    <span className="logo-text">YC</span>
                </Link>

                {/* Navigation Links */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            <span className="nav-label">{link.label}</span>
                            {/* Pulse indicator for unvisited important pages */}
                            {showHint && (link.path === '/projects' || link.path === '/videos') && (
                                <span className="nav-pulse"></span>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
