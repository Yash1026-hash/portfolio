import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Videos from './pages/Videos'
import Achievements from './pages/Achievements'
import About from './pages/About'
import Contact from './pages/Contact'
import { AnimatePresence } from 'framer-motion'
import PixelTransition from './components/PixelTransition'

function App() {
    const location = useLocation()

    return (
        <div className="crimson-intelligence">
            {/* HUD OVERLAYS */}
            <div className="scanlines"></div>
            <div className="hex-grid-red"></div>
            
            {/* Global HUD elements */}
            <div className="hud-line" style={{ top: '40px', left: '0', width: '100%', height: '1px' }}></div>
            <div className="hud-line" style={{ top: '0', left: '40px', width: '1px', height: '100%' }}></div>
            <div className="hud-line" style={{ bottom: '40px', right: '0', width: '100%', height: '1px' }}></div>
            <div className="hud-line" style={{ top: '0', right: '40px', width: '1px', height: '100%' }}></div>

            <Navbar />

            <div className="main-viewport" style={{ position: 'relative', zIndex: 1 }}>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<PixelTransition><Home /></PixelTransition>} />
                        <Route path="/projects" element={<PixelTransition><Projects /></PixelTransition>} />
                        <Route path="/videos" element={<PixelTransition><Videos /></PixelTransition>} />
                        <Route path="/achievements" element={<PixelTransition><Achievements /></PixelTransition>} />
                        <Route path="/about" element={<PixelTransition><About /></PixelTransition>} />
                        <Route path="/contact" element={<PixelTransition><Contact /></PixelTransition>} />
                    </Routes>
                </AnimatePresence>
            </div>

            {/* Corner Markers */}
            <div style={{ position: 'fixed', top: '20px', left: '20px', color: 'var(--color-neon-red)', fontFamily: 'var(--font-mono)', fontSize: '10px', zIndex: 10000, opacity: 0.15, pointerEvents: 'none' }}>
                TR-NITY // SYS_AUTH_01
            </div>
            <div style={{ position: 'fixed', bottom: '20px', right: '20px', color: 'var(--color-neon-red)', fontFamily: 'var(--font-mono)', fontSize: '10px', zIndex: 10000, opacity: 0.15, pointerEvents: 'none' }}>
                SEC_ZONE // LN_99
            </div>
        </div>
    )
}

export default App
