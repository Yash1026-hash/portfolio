import { Link } from 'react-router-dom';

export default function StatsCard() {
    const stats = [
        { value: '15+', label: 'Projects', sublabel: 'Completed' },
        { value: '3+', label: 'Years', sublabel: 'Experience' },
        { value: '500+', label: 'Commits', sublabel: 'Open Source' },
        { value: '10+', label: 'Clients', sublabel: 'Worldwide' }
    ];

    return (
        <div className="card stats-card">
            <div className="card-content">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-block">
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                            <span className="stat-sublabel">{stat.sublabel}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
