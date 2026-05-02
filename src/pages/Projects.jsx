import { useState } from 'react';
import { projects, categories } from '../data/projects';
import Footer from '../components/Footer';

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="projects-page" style={{ paddingTop: '160px' }}>
            <div className="container">
                <div style={{ marginBottom: '80px' }}>
                    <div className="mono-label">[ ACCESS_GRANTED ]</div>
                    <h1 style={{ fontSize: '72px', margin: '16px 0', fontWeight: 200 }}>REPOSITORY_INDEX</h1>
                    <p style={{ color: 'var(--color-ash)', opacity: 0.6, fontSize: '18px', maxWidth: '600px', fontFamily: 'var(--font-mono)' }}>
                        Secure access to project telemetry and research frameworks.
                    </p>
                </div>

                {/* Filter */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '64px' }}>
                    {categories.map((category) => (
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

                <div style={{ display: 'grid', gap: '2px', background: 'var(--bg-tertiary)' }}>
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="card-tactical" style={{ border: 'none', display: 'grid', gridTemplateColumns: '80px 1fr 300px 150px', alignItems: 'center' }}>
                            <div style={{ fontFamily: 'var(--font-mono)', opacity: 0.3, fontSize: '14px' }}>0{project.id}</div>
                            <div>
                                <h3 style={{ fontSize: '24px', color: 'var(--text-primary)' }}>{project.title}</h3>
                                <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
                                    <span className="mono-label" style={{ fontSize: '10px' }}>{project.category}</span>
                                    <span className="mono-label" style={{ fontSize: '10px', color: '#555' }}>{project.year}</span>
                                </div>
                            </div>
                            <div style={{ color: 'var(--color-ash)', opacity: 0.5, fontSize: '14px', paddingRight: '40px' }}>
                                {project.description.substring(0, 100)}...
                            </div>
                            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-primary-red" style={{ fontSize: '11px', padding: '8px', justifyContent: 'center' }}>
                                VIEW_CORE
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
