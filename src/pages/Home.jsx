import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'
import Footer from '../components/Footer'

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <main className="portfolio-trinity">
            {/* HERO: RAYCAST OBSIDIAN + ANTIMETAL CHARTREUSE */}
            <section className="hero-obsidian">
                <div className={`container animate-fade-in ${isVisible ? 'visible' : ''}`} style={{ opacity: isVisible ? 1 : 0 }}>
                    <div className="micro-label" style={{ color: 'var(--color-chartreuse-pulse)', marginBottom: '16px' }}>
                        Connectivity & Research Engine
                    </div>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(40px, 8vw, 84px)', maxWidth: '900px', margin: '0 auto 32px' }}>
                        High-Precision <br />
                        <span style={{ color: 'var(--color-chartreuse-pulse)' }}>Digital Infrastructure.</span>
                    </h1>
                    <p className="hero-subtitle text-muted" style={{ fontSize: '20px', maxWidth: '600px', margin: '0 auto 48px' }}>
                        Bridging the gap between AI-driven observability, 
                        quantum research, and high-performance engineering.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                        <Link to="/projects" className="btn-obsidian btn-chartreuse">
                            View All Repositories
                        </Link>
                        <a href="https://github.com/Yash1026-hash" target="_blank" rel="noreferrer" className="btn-obsidian btn-ghost-dark">
                            GitHub Profile
                        </a>
                    </div>
                </div>
            </section>

            {/* TRANSITION TO TITAN LIGHT LEDGER */}
            <section className="section transition-light">
                <div className="container">
                    <div className="header-ledger" style={{ marginBottom: '80px' }}>
                        <div className="micro-label" style={{ color: 'var(--color-midnight-ink)' }}>Featured Technical Output</div>
                        <h2 style={{ fontSize: '48px', color: 'var(--color-midnight-ink)' }}>The Project Index</h2>
                    </div>

                    <div className="projects-ledger-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
                        {featuredProjects.map((project) => (
                            <div key={project.id} className="card-ledger">
                                <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div className="category-chip micro-label" style={{ background: 'var(--color-soft-concrete)', padding: '4px 12px', borderRadius: '4px' }}>
                                        {project.category}
                                    </div>
                                    <div className="year-label micro-label">{project.year}</div>
                                </div>
                                <div className="card-body">
                                    <h3 style={{ fontSize: '32px', marginBottom: '16px' }}>{project.title}</h3>
                                    <p className="text-muted" style={{ fontSize: '16px', marginBottom: '24px', lineHeight: '1.6' }}>
                                        {project.description}
                                    </p>
                                    <div className="tech-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {project.techStack.map(tech => (
                                            <span key={tech} style={{ fontSize: '12px', background: 'rgba(0,0,0,0.05)', padding: '2px 8px', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-footer" style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--color-soft-concrete)' }}>
                                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-obsidian" style={{ background: 'var(--color-midnight-ink)', color: 'white', padding: '8px 24px', width: '100%', justifyContent: 'center' }}>
                                        Inspect Source
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '120px', textAlign: 'center' }}>
                        <Link to="/projects" className="btn-obsidian" style={{ color: 'var(--color-midnight-ink)', border: '1px solid var(--color-midnight-ink)', background: 'transparent' }}>
                            Explore Full Catalog
                        </Link>
                    </div>
                </div>
            </section>

            {/* TECHNICAL SPECS SECTION (TITAN + RAYCAST STATUS) */}
            <section className="section" style={{ background: 'var(--color-off-white-sage)', borderTop: '1px solid var(--color-soft-concrete)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '40px', color: 'var(--color-midnight-ink)', marginBottom: '32px' }}>
                                Technical Architecture <br /> & Core Competencies
                            </h2>
                            <p className="text-muted" style={{ marginBottom: '40px' }}>
                                My workflow is centered around high-precision engineering and data-driven optimization. 
                                Each system is built for scalability and performance.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                <div>
                                    <div className="micro-label">Status</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-midnight-ink)', fontWeight: 500 }}>
                                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#59d499' }}></span>
                                        Active for Research
                                    </div>
                                </div>
                                <div>
                                    <div className="micro-label">Focus</div>
                                    <div style={{ color: 'var(--color-midnight-ink)', fontWeight: 500 }}>AI / Quantum / VLSI</div>
                                </div>
                            </div>
                        </div>
                        <div className="glass-panel" style={{ background: '#07080a', padding: '32px' }}>
                            <div className="micro-label" style={{ marginBottom: '16px' }}>Terminal_Input</div>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#59d499' }}>
                                {`> initializing research_engine...`} <br />
                                {`> fetching kl_connect_metrics...`} <br />
                                {`> status: online`} <br />
                                {`> current_optimization: pso_sa_hybrid`} <br />
                                <br />
                                <span style={{ color: 'var(--color-snow)' }}>$ portfolio --build-all</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
