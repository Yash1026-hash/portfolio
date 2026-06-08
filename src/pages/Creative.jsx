import { useState } from 'react';
import Footer from '../components/Footer';
import { videos } from '../data/videos';
import { toolStack, photos } from '../data/creative';

export default function Creative() {
    const [hoveredVideo, setHoveredVideo] = useState(null);

    return (
        <div className="creative-page" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
            <div className="container">
                
                {/* SECTION 1: The Opening Statement */}
                <section style={{ marginBottom: '80px' }}>
                    <div className="mono-label-visual" style={{ marginBottom: '16px' }}>[ VISUAL_CRAFT ]</div>
                    <h1 style={{ fontSize: 'clamp(48px, 8vw, 84px)', fontWeight: 200, lineHeight: 1.1, margin: '0 0 32px' }}>
                        Frame.<br />
                        Cut.<br />
                        <span style={{ color: 'var(--accent-visual)' }}>Publish._</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: 'var(--color-ash)', opacity: 0.7, maxWidth: '600px', lineHeight: '1.8' }}>
                        I've been shooting and editing campus events since 2023. Premiere Pro for sync-heavy cuts, 
                        DaVinci Resolve for color — CapCut when the deadline is in 4 hours.
                    </p>
                </section>

                {/* SECTION 2: The Tools Shelf */}
                <section className="card-tactical" style={{ marginBottom: '40px', padding: '32px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
                        {toolStack.map(tool => (
                            <div key={tool.name}>
                                <div style={{ fontSize: '16px', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '4px' }}>{tool.name}</div>
                                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>{tool.role}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ flex: 1, height: '4px', background: 'var(--bg-tertiary)', borderRadius: '2px', overflow: 'hidden' }}>
                                        <div style={{ width: `${tool.usage}%`, height: '100%', background: tool.color }} />
                                    </div>
                                    <span className="mono-label" style={{ color: tool.color, fontSize: '10px' }}>{tool.usage}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 3: The Stats Strip */}
                <section style={{ 
                    display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '80px', 
                    padding: '24px 0', borderTop: 'var(--hud-border)', borderBottom: 'var(--hud-border)' 
                }}>
                    {[
                        { label: 'VIDEOS_EDITED', value: '4' },
                        { label: 'PRO_TOOLS', value: '3' },
                        { label: 'YEARS_EXP', value: '2+' },
                        { label: 'MEDIA_TEAM', value: 'IEEE COMSOC' }
                    ].map(stat => (
                        <div key={stat.label}>
                            <div style={{ fontSize: '32px', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '4px' }}>{stat.value}</div>
                            <div className="mono-label-visual">{stat.label}</div>
                        </div>
                    ))}
                </section>

                {/* SECTION 4: The Work Grid */}
                <section style={{ marginBottom: '120px' }}>
                    <div className="mono-label-visual" style={{ marginBottom: '32px' }}>[ PRODUCTION_ARCHIVE ]</div>
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                        gap: '40px' 
                    }}>
                        {videos.map(video => (
                            <a 
                                key={video.id} 
                                href={video.videoUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', display: 'block' }}
                                onMouseEnter={() => setHoveredVideo(video.id)}
                                onMouseLeave={() => setHoveredVideo(null)}
                            >
                                <div style={{ 
                                    aspectRatio: '9/16', 
                                    background: 'var(--bg-tertiary)', 
                                    marginBottom: '20px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    border: 'var(--hud-border)'
                                }}>
                                    {video.thumbnail && (
                                        <img 
                                            src={video.thumbnail} 
                                            alt={video.title} 
                                            style={{ 
                                                width: '100%', height: '100%', objectFit: 'cover',
                                                transition: 'transform 0.5s ease',
                                                transform: hoveredVideo === video.id ? 'scale(1.05)' : 'scale(1)'
                                            }} 
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                        />
                                    )}
                                    <div style={{ 
                                        position: 'absolute', inset: 0, 
                                        background: 'rgba(0,0,0,0.4)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        opacity: hoveredVideo === video.id ? 1 : 0,
                                        transition: 'opacity 0.3s ease'
                                    }}>
                                        <div style={{ 
                                            width: '60px', height: '60px', 
                                            borderRadius: '50%', background: 'var(--accent-visual)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: '#000'
                                        }}>
                                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                                        </div>
                                    </div>
                                    <div style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(0,0,0,0.8)', padding: '4px 8px', borderRadius: '4px' }}>
                                        <span className="mono-label" style={{ color: 'var(--text-primary)' }}>{video.duration}</span>
                                    </div>
                                </div>

                                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '8px' }}>{video.title}</h3>
                                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                                    {video.role} &nbsp;·&nbsp; {video.turnaround}
                                </div>
                                <p style={{ fontSize: '14px', color: 'var(--color-ash)', opacity: 0.8, marginBottom: '16px', fontStyle: 'italic' }}>
                                    "{video.highlight}"
                                </p>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    {video.tools.map(tool => (
                                        <span key={tool} style={{ fontSize: '11px', color: 'var(--text-primary)', background: 'var(--bg-tertiary)', padding: '4px 10px', borderRadius: '2px', border: 'var(--hud-border)' }}>
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* SECTION 5: Photography Strip */}
                <section>
                    <div className="mono-label-visual" style={{ marginBottom: '32px' }}>[ RAW_EXPOSURES ]</div>
                    <div style={{
                        display: 'flex', gap: '24px', overflowX: 'auto',
                        scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch',
                        paddingBottom: '24px',
                        /* Hide scrollbar */
                        scrollbarWidth: 'none', msOverflowStyle: 'none'
                    }}>
                        {photos.map((photo, i) => (
                            <div key={i} style={{ 
                                flexShrink: 0, width: '300px', scrollSnapAlign: 'start',
                                border: 'var(--hud-border)', background: 'var(--bg-tertiary)'
                            }}>
                                <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                                    <img src={photo.src} alt={photo.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '16px' }}>
                                    <div style={{ fontSize: '14px', color: 'var(--text-primary)', marginBottom: '4px' }}>{photo.caption}</div>
                                    <div className="mono-label" style={{ color: 'var(--text-secondary)' }}>{photo.gear}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
