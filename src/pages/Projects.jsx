import { useState } from 'react';
import { projects, categories } from '../data/projects';
import Footer from '../components/Footer';

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="projects-page obsidian-void" style={{ paddingTop: '160px' }}>
            <div className="antimetal-grid" style={{ opacity: 0.02 }}></div>
            
            <div className="container">
                <div className="page-header" style={{ marginBottom: '80px' }}>
                    <div className="micro-label">Repository Catalog</div>
                    <h1 className="heading-display" style={{ fontSize: '72px', margin: '16px 0 32px' }}>Index.</h1>
                    <p className="text-muted" style={{ fontSize: '18px', maxWidth: '600px' }}>
                        A systematic collection of technical research and engineering projects.
                    </p>
                </div>

                {/* Filters */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '64px', overflowX: 'auto', paddingBottom: '8px' }}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className="btn-raycast"
                            style={{ 
                                background: activeCategory === category ? 'white' : 'transparent',
                                color: activeCategory === category ? 'var(--color-void-black)' : 'var(--color-slate-200)',
                                border: '1px solid var(--color-graphite-500)',
                                padding: '6px 16px',
                                fontSize: '13px'
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="glass-card" style={{ display: 'grid', gridTemplateColumns: '100px 1fr 300px auto', alignItems: 'center', padding: '24px 32px' }}>
                            <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-graphite-500)' }}>
                                {String(project.id).padStart(3, '0')}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '24px', color: 'white' }}>{project.title}</h3>
                                <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                                    <span className="micro-label" style={{ fontSize: '10px' }}>{project.category}</span>
                                    <span className="micro-label" style={{ fontSize: '10px' }}>{project.year}</span>
                                </div>
                            </div>
                            <div style={{ color: 'var(--color-slate-300)', fontSize: '14px', paddingRight: '32px' }}>
                                {project.description.substring(0, 80)}...
                            </div>
                            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-raycast btn-ghost" style={{ fontSize: '12px' }}>
                                View Source
                            </a>
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
