import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'HOME' },
        { path: '/projects', label: 'PROJECTS' },
        { path: '/videos', label: 'VIDEOS' },
        { path: '/achievements', label: 'ACHIEVEMENTS' },
        { path: '/about', label: 'ABOUT' },
        { path: '/contact', label: 'CONTACT' }
    ];

    return (
        <nav className="navbar-war-room">
            <div className="container">
                <div className="nav-container">
                    <Link to="/" style={{ color: 'var(--color-neon-red)', textDecoration: 'none', fontWeight: 800, fontSize: '20px', letterSpacing: '4px' }}>
                        YASH_
                    </Link>

                    <div style={{ display: 'flex', gap: '32px' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link-red ${location.pathname === link.path ? 'active' : ''}`}
                                style={{
                                    color: location.pathname === link.path ? 'var(--color-neon-red)' : '#ffffff',
                                    opacity: location.pathname === link.path ? 1 : 0.7,
                                    textShadow: location.pathname === link.path ? '0 0 10px rgba(255,59,59,0.5)' : 'none',
                                    fontWeight: location.pathname === link.path ? 600 : 400
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div style={{ marginLeft: '16px', paddingLeft: '24px', borderLeft: '1px solid var(--border-hud)' }}>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
