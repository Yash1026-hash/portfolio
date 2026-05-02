import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <main className="obsidian-void">
            {/* ANTIMETAL PATTERNS */}
            <div className="antimetal-grid"></div>
            <div className="hex-pattern"></div>

            {/* HERO SECTION */}
            <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div className="container" style={{ background: 'var(--gradient-nebula)', padding: '100px 0', borderRadius: '100%' }}>
                    <div className="micro-label" style={{ color: 'var(--color-chartreuse-pulse)', marginBottom: '24px' }}>
                        Research & Infrastructure
                    </div>
                    <h1 className="heading-display" style={{ fontSize: 'clamp(48px, 10vw, 96px)', marginBottom: '32px' }}>
                        The Obsidian <br /> Engine.
                    </h1>
                    <p className="text-muted" style={{ fontSize: '20px', maxWidth: '600px', margin: '0 auto 48px' }}>
                        A precision-engineered portfolio showcasing 
                        AI-driven observability and quantum research.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                        <Link to="/projects" className="btn-raycast">
                            Launch Catalog
                        </Link>
                        <a href="https://github.com/Yash1026-hash" target="_blank" rel="noreferrer" className="btn-raycast btn-ghost">
                            Source Control
                        </a>
                    </div>
                </div>
            </section>

            {/* TITAN GRAPHICS / PROJECTS SECTION */}
            <section className="section" style={{ position: 'relative' }}>
                {/* Titan blueprint graphic placeholder */}
                <svg className="blueprint-graphic" style={{ top: '-100px', left: '-50px', width: '400px', height: '400px' }} viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" stroke="white" fill="none" strokeWidth="0.5" strokeDasharray="4 4" />
                    <rect x="60" y="60" width="80" height="80" stroke="white" fill="none" strokeWidth="0.5" />
                    <line x1="20" y1="20" x2="180" y2="180" stroke="white" strokeWidth="0.2" />
                    <line x1="180" y1="20" x2="20" y2="180" stroke="white" strokeWidth="0.2" />
                </svg>

                <div className="container">
                    <div style={{ marginBottom: '80px' }}>
                        <div className="micro-label">Index // 001</div>
                        <h2 style={{ fontSize: '48px', marginTop: '16px' }}>Featured Repositories</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '24px' }}>
                        {featuredProjects.map((project) => (
                            <div key={project.id} className="glass-card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                                    <span className="micro-label" style={{ color: 'var(--color-chartreuse-pulse)' }}>{project.category}</span>
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-slate-300)' }}>{project.year}</span>
                                </div>
                                <h3 style={{ fontSize: '28px', marginBottom: '16px', color: 'white' }}>{project.title}</h3>
                                <p style={{ color: 'var(--color-slate-200)', fontSize: '15px', lineHeight: '1.6', marginBottom: '32px' }}>
                                    {project.description}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                                    {project.techStack.map(tech => (
                                        <span key={tech} style={{ fontSize: '11px', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-raycast" style={{ width: '100%', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', color: 'white' }}>
                                    Inspect Code
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECHNICAL SPECS (TITAN STYLE) */}
            <section className="section" style={{ borderTop: '1px solid var(--color-graphite-600)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div className="glass-card" style={{ padding: '48px', borderStyle: 'dashed' }}>
                            <div className="micro-label" style={{ marginBottom: '24px' }}>Status_Terminal</div>
                            <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-chartreuse-pulse)', fontSize: '14px', lineHeight: '1.8' }}>
                                [OK] Research_Core initialized <br />
                                [OK] VLSI_Blueprint_048 loaded <br />
                                [OK] Neural_Net_Sync complete <br />
                                <br />
                                <span style={{ color: 'white' }}>$ portfolio --deploy --mode obsidian</span> <br />
                                <span style={{ color: 'var(--color-slate-300)' }}>Deploying to: Yash1026-hash.void</span>
                            </div>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '40px', marginBottom: '24px' }}>Technical <br /> Competencies</h2>
                            <p className="text-muted" style={{ marginBottom: '32px' }}>
                                Specialized in high-performance computing, quantum simulators, 
                                and autonomous systems optimization.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                                <div>
                                    <div className="micro-label">Focus</div>
                                    <div style={{ fontWeight: 600 }}>Quantum / AI / VLSI</div>
                                </div>
                                <div>
                                    <div className="micro-label">Status</div>
                                    <div style={{ color: '#59d499', fontWeight: 600 }}>● Active</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
