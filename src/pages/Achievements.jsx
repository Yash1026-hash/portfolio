import { useState } from 'react';
import { achievements, achievementCategories } from '../data/achievements';
import Footer from '../components/Footer';

export default function Achievements() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredAchievements = activeCategory === 'All'
        ? achievements
        : achievements.filter(a => a.category === activeCategory);

    const sortedAchievements = [...filteredAchievements].sort((a, b) => {
        if (a.highlight && !b.highlight) return -1;
        if (!a.highlight && b.highlight) return 1;
        return 0;
    });

    return (
        <div className="achievements-page transition-light" style={{ minHeight: '100vh', paddingTop: '160px' }}>
            <div className="container">
                {/* Page Header */}
                <div className="page-header" style={{ marginBottom: '80px' }}>
                    <div className="micro-label" style={{ color: 'var(--color-midnight-ink)' }}>Academic & Technical Milestones</div>
                    <h1 style={{ fontSize: '64px', color: 'var(--color-midnight-ink)', marginTop: '16px' }}>Recognition</h1>
                </div>

                {/* Stats Summary (Titan Style) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '80px', background: 'var(--color-faded-stone)', padding: '40px', borderRadius: '32px' }}>
                    {[
                        { label: 'Competitions', count: achievements.filter(a => a.category === 'Competition').length },
                        { label: 'Certifications', count: achievements.filter(a => a.category === 'Certification').length },
                        { label: 'Publications', count: achievements.filter(a => a.category === 'Research').length },
                        { label: 'Featured', count: achievements.filter(a => a.highlight).length }
                    ].map(stat => (
                        <div key={stat.label} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '48px', fontWeight: 600, color: 'var(--color-midnight-ink)', fontFamily: 'var(--font-mono)' }}>{stat.count}</div>
                            <div className="micro-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Filter */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '48px' }}>
                    {achievementCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className="btn-obsidian"
                            style={{ 
                                background: activeCategory === category ? 'var(--color-midnight-ink)' : 'transparent',
                                color: activeCategory === category ? 'white' : 'var(--color-midnight-ink)',
                                border: '1px solid var(--color-soft-concrete)',
                                padding: '8px 20px'
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Achievements Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '32px' }}>
                    {sortedAchievements.map((achievement) => (
                        <div key={achievement.id} className="card-ledger" style={{ background: achievement.highlight ? 'var(--color-void-black)' : 'var(--color-off-white-sage)', color: achievement.highlight ? 'white' : 'var(--color-midnight-ink)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                <div className="micro-label" style={{ color: achievement.highlight ? 'var(--color-chartreuse-pulse)' : 'var(--color-gunmetal-gray)' }}>{achievement.category}</div>
                                <div className="micro-label">{achievement.date}</div>
                            </div>
                            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>{achievement.title}</h3>
                            <p style={{ fontSize: '15px', opacity: 0.8, lineHeight: '1.6' }}>{achievement.description}</p>
                            {achievement.organization && (
                                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.1)', fontSize: '14px', fontWeight: 500 }}>
                                    {achievement.organization}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: '120px' }}>
                <Footer />
            </div>
        </div>
    );
}
