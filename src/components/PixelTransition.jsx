import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';

const routeLabels = {
    '/': 'HOME',
    '/projects': 'PROJECTS',
    '/videos': 'MEDIA',
    '/achievements': 'MISSIONS',
    '/about': 'IDENTITY',
    '/contact': 'COMMS',
};

/* Generate grid-aligned circuit paths that look like real PCB traces */
const generateCircuitPaths = () => {
    const paths = [];
    const nodes = [];
    const gridSize = 5; // snap to 5-unit grid
    const snap = (v) => Math.round(v / gridSize) * gridSize;

    for (let i = 0; i < 18; i++) {
        let cx = snap(Math.random() * 100);
        let cy = snap(Math.random() * 100);
        const segments = 3 + Math.floor(Math.random() * 5);
        let d = `M ${cx} ${cy}`;
        nodes.push({ x: cx, y: cy, delay: Math.random() * 0.15, size: 0.3 + Math.random() * 0.3 });

        for (let j = 0; j < segments; j++) {
            if (Math.random() > 0.5) {
                cx = snap(cx + (Math.random() - 0.5) * 40);
                cx = Math.max(0, Math.min(100, cx));
                d += ` H ${cx}`;
            } else {
                cy = snap(cy + (Math.random() - 0.5) * 40);
                cy = Math.max(0, Math.min(100, cy));
                d += ` V ${cy}`;
            }
            // Add junction nodes at bends
            if (Math.random() > 0.6) {
                nodes.push({ x: cx, y: cy, delay: 0.1 + Math.random() * 0.25, size: 0.2 + Math.random() * 0.2 });
            }
        }

        paths.push({
            d,
            delay: i * 0.02,
            duration: 0.25 + Math.random() * 0.25,
            opacity: 0.1 + Math.random() * 0.2,
        });
        nodes.push({ x: cx, y: cy, delay: 0.2 + Math.random() * 0.15, size: 0.3 + Math.random() * 0.3 });
    }

    return { paths, nodes };
};

/* Generate floating particles */
const generateParticles = () => 
    Array.from({ length: 30 }, () => ({
        x: Math.random() * 100,
        startY: 60 + Math.random() * 40,
        delay: Math.random() * 0.4,
        duration: 0.8 + Math.random() * 0.6,
        size: 1 + Math.random() * 2,
    }));

const PixelTransition = ({ children }) => {
    const location = useLocation();
    const label = routeLabels[location.pathname] || '???';
    const letters = label.split('');
    const [showBoot, setShowBoot] = useState(true);

    const circuit = useMemo(() => generateCircuitPaths(), []);
    const particles = useMemo(() => generateParticles(), []);

    useEffect(() => {
        setShowBoot(true);
        const timer = setTimeout(() => setShowBoot(false), 500);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <div style={{ position: 'relative' }}>
            <AnimatePresence>
                {showBoot && (
                    <motion.div
                        key="boot-overlay"
                        initial={{ opacity: 1 }}
                        exit={{ 
                            opacity: 0,
                            scale: 1.05,
                            filter: 'blur(12px) brightness(1.5)',
                            transition: { duration: 0.15, ease: [0.76, 0, 0.24, 1] }
                        }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: '#020202',
                            zIndex: 99999,
                            overflow: 'hidden',
                        }}
                    >
                        {/* Subtle background grid */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `
                                    linear-gradient(rgba(14,165,233,0.03) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(14,165,233,0.03) 1px, transparent 1px)
                                `,
                                backgroundSize: '40px 40px',
                                zIndex: 0,
                            }}
                        />

                        {/* Circuit trace SVG */}
                        <svg
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            style={{
                                position: 'absolute',
                                inset: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 1,
                            }}
                        >
                            {circuit.paths.map((path, i) => (
                                <motion.path
                                    key={i}
                                    d={path.d}
                                    fill="none"
                                    stroke={`rgba(14,165,233,${path.opacity})`}
                                    strokeWidth="0.12"
                                    strokeLinecap="square"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ 
                                        duration: path.duration, 
                                        delay: path.delay, 
                                        ease: [0.22, 1, 0.36, 1] 
                                    }}
                                />
                            ))}
                            {circuit.nodes.map((node, i) => (
                                <motion.circle
                                    key={`n-${i}`}
                                    cx={node.x}
                                    cy={node.y}
                                    r={node.size}
                                    fill="none"
                                    stroke="rgba(14,165,233,0.4)"
                                    strokeWidth="0.08"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: [0, 0.8, 0.5], scale: [0, 1.8, 1] }}
                                    transition={{ duration: 0.25, delay: node.delay }}
                                />
                            ))}
                            {/* Active data pulses along traces */}
                            {circuit.paths.slice(0, 6).map((path, i) => (
                                <motion.circle
                                    key={`pulse-${i}`}
                                    r="0.3"
                                    fill="var(--accent-secondary)"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                                >
                                    <animateMotion
                                        dur={`${0.4 + i * 0.06}s`}
                                        begin={`${0.3 + i * 0.06}s`}
                                        path={path.d}
                                        fill="freeze"
                                    />
                                </motion.circle>
                            ))}
                        </svg>

                        {/* Floating particles rising upward */}
                        {particles.map((p, i) => (
                            <motion.div
                                key={`p-${i}`}
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: [0, 0.6, 0], y: -200 }}
                                transition={{ duration: p.duration, delay: p.delay, ease: 'easeOut' }}
                                style={{
                                    position: 'absolute',
                                    left: `${p.x}%`,
                                    top: `${p.startY}%`,
                                    width: `${p.size}px`,
                                    height: `${p.size}px`,
                                    borderRadius: '50%',
                                    background: 'var(--accent-secondary)',
                                    zIndex: 2,
                                }}
                            />
                        ))}

                        {/* Radial glow */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.3 }}
                            animate={{ opacity: 1, scale: 1.2 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'radial-gradient(ellipse at center, rgba(14,165,233,0.07) 0%, transparent 50%)',
                                zIndex: 2,
                            }}
                        />

                        {/* Center content */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 3,
                        }}>
                            {/* Prefix label */}
                            <motion.div
                                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                                animate={{ opacity: 0.4, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.3, delay: 0.05 }}
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '10px',
                                    letterSpacing: '0.6em',
                                    color: 'var(--accent-secondary)',
                                    marginBottom: '16px',
                                }}
                            >
                                NAVIGATING TO
                            </motion.div>

                            {/* Letter-by-letter text */}
                            <div style={{ 
                                overflow: 'hidden', 
                                display: 'flex', 
                                gap: 'clamp(2px, 1vw, 8px)',
                                padding: '0 24px',
                            }}>
                                {letters.map((letter, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ y: '120%', opacity: 0, rotateX: 90 }}
                                        animate={{ y: '0%', opacity: 1, rotateX: 0 }}
                                        transition={{ 
                                            duration: 0.4, 
                                            delay: 0.08 + i * 0.04,
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        style={{
                                            fontFamily: 'var(--font-serif)',
                                            fontSize: 'clamp(48px, 14vw, 160px)',
                                            fontWeight: 200,
                                            color: '#fff',
                                            letterSpacing: '-0.02em',
                                            lineHeight: 1,
                                            display: 'inline-block',
                                        }}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Animated underline + dot */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.35, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                style={{
                                    width: '80px',
                                    height: '1px',
                                    background: 'linear-gradient(90deg, transparent, var(--accent-secondary), transparent)',
                                    marginTop: '20px',
                                    transformOrigin: 'center',
                                }}
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ 
                                    opacity: [0, 1, 0.6], 
                                    scale: [0, 1.5, 1],
                                }}
                                transition={{ delay: 0.45, duration: 0.3, ease: 'easeOut' }}
                                style={{
                                    width: '5px',
                                    height: '5px',
                                    borderRadius: '50%',
                                    background: 'var(--accent-secondary)',
                                    marginTop: '14px',
                                    boxShadow: '0 0 15px var(--accent-secondary), 0 0 40px var(--accent-secondary)',
                                }}
                            />
                        </div>

                        {/* Corner markers */}
                        {/* Top-left */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.15 }}
                            transition={{ delay: 0.1 }}
                            style={{
                                position: 'absolute', top: 24, left: 24,
                                fontFamily: 'var(--font-mono)', fontSize: '9px',
                                letterSpacing: '0.2em', color: 'var(--accent-secondary)',
                                zIndex: 4,
                            }}
                        >
                            TR-NITY_v4.2
                        </motion.div>
                        {/* Top-right: animated counter */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.15 }}
                            transition={{ delay: 0.1 }}
                            style={{
                                position: 'absolute', top: 24, right: 24,
                                fontFamily: 'var(--font-mono)', fontSize: '9px',
                                letterSpacing: '0.2em', color: 'var(--accent-secondary)',
                                zIndex: 4,
                            }}
                        >
                            SEC_ZONE_09
                        </motion.div>
                        {/* Bottom center: progress */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.25 }}
                            transition={{ delay: 0.15 }}
                            style={{
                                position: 'absolute', bottom: 28,
                                display: 'flex', alignItems: 'center', gap: '12px',
                                fontFamily: 'var(--font-mono)', fontSize: '9px',
                                letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)',
                                zIndex: 4,
                            }}
                        >
                            <div style={{ width: '100px', height: '1px', background: 'rgba(255,255,255,0.08)', overflow: 'hidden', borderRadius: '1px' }}>
                                <motion.div
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                                    style={{ height: '100%', background: 'var(--accent-secondary)', opacity: 0.5 }}
                                />
                            </div>
                            <span>SECTOR LOADED</span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Page content */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default PixelTransition;
