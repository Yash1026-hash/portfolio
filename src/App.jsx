import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Videos from './pages/Videos'
import Achievements from './pages/Achievements'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
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

            <div className="main-viewport" style={{ position: 'relative', zIndex: 10 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/videos" element={<Videos />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>

            {/* Corner Markers */}
            <div style={{ position: 'fixed', top: '20px', left: '20px', color: 'var(--color-neon-red)', fontFamily: 'var(--font-mono)', fontSize: '10px', zIndex: 10000 }}>
                TR-NITY // SYS_AUTH_01
            </div>
            <div style={{ position: 'fixed', bottom: '20px', right: '20px', color: 'var(--color-neon-red)', fontFamily: 'var(--font-mono)', fontSize: '10px', zIndex: 10000 }}>
                SEC_ZONE // LN_99
            </div>
        </div>
    )
}

export default App
