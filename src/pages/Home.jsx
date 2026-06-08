import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'
import Footer from '../components/Footer'
import GitHubActivity from '../components/GitHubActivity'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function Home() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const springConfig = { damping: 25, stiffness: 100 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window
            const xVal = (e.clientX / innerWidth - 0.5) * 60
            const yVal = (e.clientY / innerHeight - 0.5) * 60
            mouseX.set(xVal)
            mouseY.set(yVal)
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    // Smart truncation: break at last complete word before maxLen
    const smartTruncate = (text, maxLen = 120) => {
        if (text.length <= maxLen) return text
        const truncated = text.substring(0, maxLen)
        const lastSpace = truncated.lastIndexOf(' ')
        return truncated.substring(0, lastSpace) + '…'
    }

    return (
        <main style={{ minHeight: '100vh' }}>
            {/* HERO SECTION */}
            <section className="hero-section-mobile" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '120px', paddingBottom: '60px' }}>
                <div className="container">
                    <motion.div 
                        style={{ maxWidth: '700px' }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="mono-label" style={{ marginBottom: '20px' }}>[ VLSI + EMBEDDED AI PORTFOLIO ]</div>
                        <h1 style={{ fontSize: 'clamp(52px, 11vw, 110px)', lineHeight: '1.0', fontWeight: 300, marginBottom: '28px', letterSpacing: '-2px', fontFamily: 'var(--font-serif)' }}>
                            VLSI &amp; <br />
                            Embedded <br />
                            <span style={{ color: 'var(--accent-secondary)' }}>AI Engineer_</span>
                        </h1>
                        <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '48px', maxWidth: '560px', fontFamily: 'var(--font-mono)', lineHeight: 1.7 }}>
                            I build at the intersection of FPGA digital design, computer vision, 
                            and edge systems. My work moves from circuits and signals to deployable 
                            AI prototypes.
                        </p>
                        <motion.div 
                            style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <Link to="/contact" className="btn-primary-red">
                                CONTACT ME
                            </Link>
                            <Link to="/projects" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '13px', display: 'flex', alignItems: 'center', opacity: 0.7 }}>
                                View Projects →
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Tactical HUD Element (Right) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }}
                    style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', x, y }}
                    className="hide-mobile"
                >
                    <div style={{ width: '400px', height: '400px', border: 'var(--hud-border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '300px', height: '300px', border: 'var(--hud-border)', borderStyle: 'dashed', borderRadius: '50%', animation: 'spin 20s linear infinite' }}></div>
                        <div style={{ position: 'absolute', fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-secondary)', textAlign: 'center' }}>
                            SEC_ZONE_9 <br />
                            ACTIVE_SCN
                        </div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div 
                    style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-secondary)' }}>SCROLL</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        style={{ fontSize: '16px', color: 'var(--text-secondary)' }}
                    >
                        ↓
                    </motion.div>
                </motion.div>
            </section>


            {/* STATS ROW */}
            <section style={{ padding: '60px 0', borderTop: 'var(--hud-border)', borderBottom: 'var(--hud-border)' }}>
                <div className="container">
                    <div className="stats-row">
                        {[
                            { value: '10', label: 'PROJECTS' },
                            { value: '2×', label: 'HACKATHON_WINS' },
                            { value: '8.29', label: 'CGPA' },
                            { value: 'IEEE', label: 'COMSOC_TREASURER' }
                        ].map((stat) => (
                            <div key={stat.label} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 200, fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>{stat.value}</div>
                                <div className="mono-label" style={{ marginTop: '8px', fontSize: '10px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURED PROJECTS */}
            <section className="mobile-padding-reduce" style={{ padding: '120px 0', background: 'var(--bg-tertiary)' }}>
                <div className="container">
                    <div style={{ marginBottom: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <div>
                            <div className="mono-label">REPOSITORIES // STACK_10</div>
                            <h2 style={{ fontSize: '48px', marginTop: '16px' }}>Mission Output</h2>
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', textAlign: 'right' }}>
                            TOTAL_NODES: 10 <br />
                            STATUS: STABLE
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '32px' }}>
                        {featuredProjects.map((project) => (
                            <div key={project.id} className="card-tactical">
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                                    <span className="mono-label">{project.category}</span>
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', opacity: 0.5 }}>#{String(project.id).padStart(2, '0')}</span>
                                </div>
                                <h3 style={{ fontSize: '28px', marginBottom: '16px', color: 'var(--text-primary)' }}>{project.title}</h3>
                                <p style={{ color: 'var(--color-ash)', opacity: 0.6, fontSize: '15px', marginBottom: '32px', minHeight: '60px' }}>
                                    {smartTruncate(project.description)}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                                    {project.techStack.map(tech => (
                                        <span key={tech} style={{ fontSize: '10px', color: 'var(--color-neon-red)', border: 'var(--hud-border)', padding: '2px 8px', borderRadius: '2px', fontFamily: 'var(--font-mono)' }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.githubUrl ? (
                                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-primary-red" style={{ width: '100%', justifyContent: 'center', fontSize: '11px', padding: '10px', position: 'relative', zIndex: 1 }}>
                                        INSPECT_CORE
                                    </a>
                                ) : (
                                    <span className="btn-primary-red" style={{ width: '100%', justifyContent: 'center', fontSize: '11px', padding: '10px', opacity: 0.5, cursor: 'not-allowed', position: 'relative', zIndex: 1 }}>
                                        IN_PROGRESS
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <GitHubActivity />

            <Footer />

            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </main>
    )
}
