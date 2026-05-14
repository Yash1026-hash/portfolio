import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'
import Footer from '../components/Footer'
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
            // Calculate distance from center (-1 to 1)
            const xVal = (e.clientX / innerWidth - 0.5) * 60
            const yVal = (e.clientY / innerHeight - 0.5) * 60
            mouseX.set(xVal)
            mouseY.set(yVal)
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <main style={{ minHeight: '100vh' }}>
            {/* HERO SECTION: MISSION BRIEFING */}
            <section style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                    <motion.div 
                        style={{ maxWidth: '800px' }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="mono-label" style={{ marginBottom: '16px' }}>[ INITIALIZING_NEURAL_CORE... OK ]</div>
                        <h1 style={{ fontSize: 'clamp(48px, 12vw, 120px)', lineHeight: '0.9', fontWeight: 200, marginBottom: '24px', letterSpacing: '-2px' }}>
                            I VIBECODE <br />
                            <span style={{ color: 'var(--color-neon-red)' }}>& LEARN_</span>
                        </h1>
                        <p style={{ fontSize: '20px', color: 'var(--color-ash)', opacity: 0.7, marginBottom: '48px', maxWidth: '600px', fontFamily: 'var(--font-mono)' }}>
                            Shooting & editing film. Reading extensively. Constantly pushing boundaries to learn more and build better. A hybrid of technical precision and creative output.
                        </p>
                        <motion.div 
                            style={{ display: 'flex', gap: '24px' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <Link to="/contact" className="btn-primary-red">
                                INITIATE_CONTACT
                            </Link>
                            <Link to="/projects" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '13px', display: 'flex', alignItems: 'center' }}>
                                VIEW_REPOSITORIES
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
                        <div style={{ position: 'absolute', fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-neon-red)' }}>
                            SEC_ZONE_9 <br />
                            ACTIVE_SCN
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* FEATURED PROJECTS: THE WAR ROOM INDEX */}
            <section style={{ padding: '120px 0', background: 'var(--bg-tertiary)' }}>
                <div className="container">
                    <div style={{ marginBottom: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <div>
                            <div className="mono-label">REPOSITORIES // STACK_7</div>
                            <h2 style={{ fontSize: '48px', marginTop: '16px' }}>Mission Output</h2>
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', textAlign: 'right' }}>
                            TOTAL_NODES: 07 <br />
                            STATUS: STABLE
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '32px' }}>
                        {featuredProjects.map((project) => (
                            <div key={project.id} className="card-tactical">
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                                    <span className="mono-label">{project.category}</span>
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', opacity: 0.5 }}>#{project.id}</span>
                                </div>
                                <h3 style={{ fontSize: '28px', marginBottom: '16px', color: 'var(--text-primary)' }}>{project.title}</h3>
                                <p style={{ color: 'var(--color-ash)', opacity: 0.6, fontSize: '15px', marginBottom: '32px', height: '80px', overflow: 'hidden' }}>
                                    {project.description}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                                    {project.techStack.map(tech => (
                                        <span key={tech} style={{ fontSize: '10px', color: 'var(--color-neon-red)', border: 'var(--hud-border)', padding: '2px 8px', borderRadius: '2px', fontFamily: 'var(--font-mono)' }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-primary-red" style={{ width: '100%', justifyContent: 'center', fontSize: '11px', padding: '10px' }}>
                                    INSPECT_CORE
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECHNICAL SPECS: THE TERMINAL */}
            <section style={{ padding: '120px 0' }} className="mobile-padding-reduce">
                <div className="container">
                    <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
                        <div style={{ background: 'var(--bg-secondary)', padding: '48px', border: 'var(--hud-border)' }}>
                            <div className="mono-label" style={{ marginBottom: '24px' }}>TERMINAL_OUTPUT</div>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', lineHeight: '1.8', color: '#555' }}>
                                {`> systemctl start research_core`} <br />
                                {`> fetching kl_connect telemetry... OK`} <br />
                                {`> analyzing hybrid_pso_sa_algorithm...`} <br />
                                <span style={{ color: 'var(--color-neon-red)' }}>{`> optimal_found: true`}</span> <br />
                                {`> status: mission_ready`} <br />
                                <br />
                                <span style={{ color: 'var(--text-primary)' }}>$ portfolio --info --all</span>
                            </div>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '40px', marginBottom: '32px' }}>Operational <br /> Capabilities</h2>
                            <p style={{ color: 'var(--color-ash)', opacity: 0.6, marginBottom: '40px' }}>
                                Bridging the gap between high-level AI orchestration and 
                                low-level VLSI circuit optimization. Mission-ready for 
                                complex research and deployment.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                <div>
                                    <div className="mono-label">Core_Sectors</div>
                                    <div style={{ fontSize: '18px', fontWeight: 600 }}>AI / Quantum / VLSI</div>
                                </div>
                                <div>
                                    <div className="mono-label">Deployment</div>
                                    <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-neon-red)' }}>Active_Ready</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
