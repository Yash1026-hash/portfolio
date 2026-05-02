import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Achievements from './pages/Achievements'
import About from './pages/About'
import Contact from './pages/Contact'

// Page transition wrapper component
function PageTransition({ children }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`page-transition ${isVisible ? 'visible' : ''}`}>
            {children}
        </div>
    );
}

// Animated Routes component
function AnimatedRoutes() {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState('fade-in');

    useEffect(() => {
        if (location !== displayLocation) {
            setTransitionStage('fade-out');
        }
    }, [location, displayLocation]);

    const handleAnimationEnd = () => {
        if (transitionStage === 'fade-out') {
            setTransitionStage('fade-in');
            setDisplayLocation(location);
        }
    };

    return (
        <div
            className={`page-wrapper ${transitionStage}`}
            onAnimationEnd={handleAnimationEnd}
        >
            <Routes location={displayLocation}>
                <Route path="/" element={
                    <PageTransition key="home">
                        <Home />
                    </PageTransition>
                } />
                <Route path="/projects" element={
                    <PageTransition key="projects">
                        <Projects />
                    </PageTransition>
                } />
                <Route path="/achievements" element={
                    <PageTransition key="achievements">
                        <Achievements />
                    </PageTransition>
                } />
                <Route path="/about" element={
                    <PageTransition key="about">
                        <About />
                    </PageTransition>
                } />
                <Route path="/contact" element={
                    <PageTransition key="contact">
                        <Contact />
                    </PageTransition>
                } />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <>
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <AnimatedRoutes />

            {/* Noise Overlay (Antimetal Style) */}
            <div className="noise-overlay" style={{ 
                position: 'fixed', 
                inset: 0, 
                zIndex: 999, 
                pointerEvents: 'none', 
                opacity: 0.03, 
                backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' 
            }}></div>
        </>
    )
}

export default App
