export default function AchievementCard({ achievement }) {
    const { title, category, year, description, icon, highlight } = achievement;

    const icons = {
        trophy: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
        ),
        document: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
            </svg>
        ),
        badge: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 15l-2 5l-1-1l-4 2l2-4l-1-1l5-2" />
                <circle cx="12" cy="8" r="6" />
                <path d="M12 15l2 5l1-1l4 2l-2-4l1-1l-5-2" />
            </svg>
        ),
        star: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
        code: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        )
    };

    return (
        <div className={`achievement-card ${highlight ? 'highlight' : ''}`}>
            {/* Icon */}
            <div className="achievement-icon">
                {icons[icon] || icons.star}
            </div>

            {/* Content */}
            <div className="achievement-content">
                <div className="achievement-header">
                    <span className="achievement-category">{category}</span>
                    <span className="achievement-year">{year}</span>
                </div>

                <h3 className="achievement-title">{title}</h3>
                <p className="achievement-description">{description}</p>
            </div>

            {/* Highlight Badge */}
            {highlight && (
                <div className="achievement-highlight-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                </div>
            )}
        </div>
    );
}
