import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'HOME' },
        { path: '/projects', label: 'PROJECTS' },
        { path: '/creative', label: 'CREATIVE' },
        { path: '/achievements', label: 'ACHIEVEMENTS' },
        { path: '/about', label: 'ABOUT' },
        { path: '/contact', label: 'CONTACT' }
    ];

    return (
        <nav className="navbar-war-room">
            <div className="container">
                <div className="nav-container">
                    <Link to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 800, fontSize: '20px', letterSpacing: '4px' }}>
                        YASH_
                    </Link>

                    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link-red ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="/YASHWANTH-RESUME.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link-red nav-resume-btn"
                            style={{ 
                                color: 'var(--accent-secondary)', 
                                border: '1px solid var(--accent-secondary)',
                                borderRadius: '4px',
                                padding: '6px 14px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                            }}
                        >
                            RESUME
                            <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" fill="none" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                        <div className="nav-theme-divider" style={{ marginLeft: '16px', paddingLeft: '24px', borderLeft: '1px solid var(--border-hud)' }}>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
