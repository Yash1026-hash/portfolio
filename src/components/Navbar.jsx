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
                    <Link to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 800, fontSize: '20px', letterSpacing: '4px' }}>
                        YASH_
                    </Link>

                    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link-red ${location.pathname === link.path ? 'active' : ''}`}
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
