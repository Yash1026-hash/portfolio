import { useState } from 'react';
import { videos, videoCategories } from '../data/videos';
import Footer from '../components/Footer';

export default function Videos() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredVideos = activeCategory === 'All'
        ? videos
        : videos.filter(v => v.category === activeCategory);

    return (
        <div className="videos-page" style={{ paddingTop: '160px' }}>
            <div className="container">
                <div style={{ marginBottom: '80px' }}>
                    <div className="mono-label">[ VISUAL_STREAM_ACTIVE ]</div>
                    <h1 style={{ fontSize: '72px', margin: '16px 0', fontWeight: 200 }}>MEDIA_INTEL</h1>
                    <p style={{ color: 'var(--color-ash)', opacity: 0.6, fontSize: '18px', maxWidth: '600px', fontFamily: 'var(--font-mono)' }}>
                        Visual documentation of technical events, creative projects, and campus engagement.
                    </p>
                </div>

                {/* Category Filter */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '64px' }}>
                    {videoCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`nav-link-red ${activeCategory === category ? 'active' : ''}`}
                            style={{ 
                                background: activeCategory === category ? 'var(--bg-tertiary)' : 'transparent',
                                border: 'var(--hud-border)',
                                padding: '8px 24px',
                                borderRadius: '2px',
                                cursor: 'pointer'
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '32px' }}>
                    {filteredVideos.map((video) => (
                        <div key={video.id} className="card-tactical">
                            <div style={{ position: 'relative', marginBottom: '24px', aspectRatio: '16/9', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'var(--hud-border)' }}>
                                <div className="mono-label" style={{ opacity: 0.3 }}>MEDIA_PLACEHOLDER</div>
                                <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'var(--accent)', color: 'var(--bg-primary)', padding: '4px 8px', fontSize: '10px', fontFamily: 'var(--font-mono)' }}>{video.platform.toUpperCase()}</div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                <span className="mono-label">{video.category}</span>
                                <span className="mono-label" style={{ color: '#555' }}>ID_{video.id}</span>
                            </div>
                            <h3 style={{ fontSize: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>{video.title}</h3>
                            <p style={{ color: 'var(--color-ash)', opacity: 0.6, fontSize: '14px', marginBottom: '24px', lineHeight: '1.6' }}>
                                {video.description}
                            </p>
                            <a href={video.videoUrl} target="_blank" rel="noreferrer" className="btn-primary-red" style={{ width: '100%', justifyContent: 'center', fontSize: '11px' }}>
                                EXECUTE_PLAYBACK
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
