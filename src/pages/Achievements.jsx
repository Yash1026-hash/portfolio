import { useState } from 'react';
import { Link } from 'react-router-dom';
import { achievements, achievementCategories } from '../data/achievements';
import AchievementCard from '../components/AchievementCard';
import Footer from '../components/Footer';

export default function Achievements() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredAchievements = activeCategory === 'All'
        ? achievements
        : achievements.filter(a => a.category === activeCategory);

    // Sort to show highlighted achievements first
    const sortedAchievements = [...filteredAchievements].sort((a, b) => {
        if (a.highlight && !b.highlight) return -1;
        if (!a.highlight && b.highlight) return 1;
        return 0;
    });

    return (
        <div className="achievements-page">
            {/* Page Header */}
            <div className="page-header">
                <Link to="/" className="back-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    <span>Back</span>
                </Link>

                <div className="page-title-section">
                    <h1 className="page-title">Achievements</h1>
                </div>

                <p className="page-description">
                    Awards, certifications, and milestones from my journey in technology and academics.
                </p>
            </div>

            {/* Stats Summary */}
            <div className="achievements-stats">
                <div className="stat-item">
                    <span className="stat-number">{achievements.filter(a => a.category === 'Competition').length}</span>
                    <span className="stat-label">Competitions Won</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">{achievements.filter(a => a.category === 'Certification').length}</span>
                    <span className="stat-label">Certifications</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">{achievements.filter(a => a.category === 'Research').length}</span>
                    <span className="stat-label">Publications</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">{achievements.filter(a => a.highlight).length}</span>
                    <span className="stat-label">Featured</span>
                </div>
            </div>

            {/* Category Filter */}
            <div className="category-filter">
                {achievementCategories.map((category) => (
                    <button
                        key={category}
                        className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        <span className="category-label">{category}</span>
                    </button>
                ))}
            </div>

            {/* Achievements Grid */}
            <div className="achievements-grid">
                {sortedAchievements.map((achievement) => (
                    <AchievementCard key={achievement.id} achievement={achievement} />
                ))}
            </div>

            {/* Empty State */}
            {sortedAchievements.length === 0 && (
                <div className="empty-state">
                    <p>No achievements found in this category.</p>
                </div>
            )}

            {/* Footer */}
            <div className="achievements-footer">
                <Footer />
            </div>
        </div>
    );
}
