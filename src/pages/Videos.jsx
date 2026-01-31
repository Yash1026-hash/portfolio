import { useState } from 'react';
import { Link } from 'react-router-dom';
import { videos, videoCategories } from '../data/videos';
import VideoDetailCard from '../components/VideoDetailCard';
import Footer from '../components/Footer';

export default function Videos() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredVideos = activeCategory === 'All'
        ? videos
        : videos.filter(v => v.category === activeCategory);

    return (
        <div className="videos-page">
            {/* Page Header */}
            <div className="page-header">
                <Link to="/" className="back-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    <span>Back</span>
                </Link>

                <div className="page-title-section">
                    <h1 className="page-title">Videos</h1>
                </div>

                <p className="page-description">
                    Tutorials, project demos, and educational content on AI, quantum computing, and web development.
                </p>
            </div>

            {/* Category Filter */}
            <div className="category-filter">
                {videoCategories.map((category) => (
                    <button
                        key={category}
                        className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        <span className="category-label">{category}</span>
                    </button>
                ))}
            </div>

            {/* Videos Grid */}
            <div className="videos-grid">
                {filteredVideos.map((video) => (
                    <VideoDetailCard key={video.id} video={video} />
                ))}
            </div>

            {/* Empty State */}
            {filteredVideos.length === 0 && (
                <div className="empty-state">
                    <p>No videos found in this category.</p>
                </div>
            )}

            {/* Footer */}
            <div className="videos-footer">
                <Footer />
            </div>
        </div>
    );
}
