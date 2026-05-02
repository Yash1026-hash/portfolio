import { useState } from 'react';
import { projects, categories } from '../data/projects';
import Footer from '../components/Footer';

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="projects-page transition-light" style={{ minHeight: '100vh', paddingTop: '160px' }}>
            <div className="container">
                {/* Page Header (Titan Style) */}
                <div className="page-header" style={{ marginBottom: '80px' }}>
                    <div className="micro-label" style={{ color: 'var(--color-midnight-ink)' }}>Technical Catalog v2.0</div>
                    <h1 style={{ fontSize: '64px', color: 'var(--color-midnight-ink)', marginTop: '16px' }}>Repositories</h1>
                    <p className="text-muted" style={{ fontSize: '18px', maxWidth: '600px', marginTop: '24px' }}>
                        A comprehensive index of research frameworks, AI implementations, 
                        and system architectures built for performance and precision.
                    </p>
                </div>

                {/* Category Filter (Raycast Pill Style) */}
                <div className="filter-container" style={{ display: 'flex', gap: '8px', marginBottom: '48px', overflowX: 'auto', paddingBottom: '16px' }}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className="btn-obsidian"
                            style={{ 
                                background: activeCategory === category ? 'var(--color-midnight-ink)' : 'transparent',
                                color: activeCategory === category ? 'white' : 'var(--color-midnight-ink)',
                                border: '1px solid var(--color-soft-concrete)',
                                padding: '8px 20px',
                                fontSize: '13px'
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Index (Titan Ledger Style) */}
                <div className="projects-ledger-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                    {filteredProjects.map((project) => (
                        <div 
                            key={project.id} 
                            className="card-ledger" 
                            style={{ 
                                flexDirection: 'row', 
                                alignItems: 'center', 
                                padding: '24px 40px',
                                background: 'white',
                                borderRadius: '16px'
                            }}
                        >
                            <div style={{ flex: '0 0 100px', fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--color-soft-concrete)' }}>
                                {String(project.id).padStart(3, '0')}
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '24px', color: 'var(--color-midnight-ink)' }}>{project.title}</h3>
                                <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
                                    <span className="micro-label" style={{ fontSize: '10px' }}>{project.category}</span>
                                    <span className="micro-label" style={{ fontSize: '10px' }}>{project.year}</span>
                                </div>
                            </div>
                            <div style={{ flex: 1, maxWidth: '400px' }} className="text-muted">
                                <p style={{ fontSize: '14px' }}>{project.description.substring(0, 100)}...</p>
                            </div>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <a 
                                    href={project.githubUrl} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="btn-obsidian" 
                                    style={{ background: 'var(--color-faded-stone)', color: 'var(--color-midnight-ink)', padding: '6px 16px', fontSize: '12px' }}
                                >
                                    Source
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--color-gunmetal-gray)' }}>
                        No repositories found in this category.
                    </div>
                )}
            </div>

            <div style={{ marginTop: '120px' }}>
                <Footer />
            </div>
        </div>
    );
}
