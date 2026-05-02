import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        // Check local storage or system preference
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            setTheme('light');
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <button 
            onClick={toggleTheme}
            style={{
                background: 'transparent',
                border: '1px solid var(--border-hud)',
                color: 'var(--color-ash)',
                padding: '8px 16px',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '4px',
                transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.color = 'var(--color-neon-red)';
                e.currentTarget.style.borderColor = 'var(--color-neon-red)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.color = 'var(--color-ash)';
                e.currentTarget.style.borderColor = 'var(--border-hud)';
            }}
        >
            {theme === 'dark' ? (
                <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                    LIGHT_SYS
                </>
            ) : (
                <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                    DARK_SYS
                </>
            )}
        </button>
    );
}
