import HeroCard from './components/HeroCard'
import ProjectCard from './components/ProjectCard'
import SocialCard from './components/SocialCard'
import VideoCard from './components/VideoCard'
import AboutCard from './components/AboutCard'
import QuoteCard from './components/QuoteCard'
import MapCard from './components/MapCard'
import Spotlight from './components/Spotlight'

function App() {
    return (
        <>
            {/* Noise Texture */}
            <div className="noise-overlay"></div>

            {/* ========== JAPANESE-STYLE TECH ELEMENTS ========== */}

            {/* Circuit Wave Pattern (Seigaiha + Circuits) - Top Right */}
            <svg
                viewBox="0 0 250 250"
                style={{
                    position: 'fixed',
                    top: '-30px',
                    right: '-30px',
                    width: '400px',
                    height: '400px',
                    opacity: 0.08,
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            >
                {/* Wave pattern with circuit nodes */}
                {[0, 1, 2, 3, 4, 5].map((row) => (
                    [0, 1, 2, 3, 4, 5].map((col) => (
                        <g key={`circuit-wave-${row}-${col}`} transform={`translate(${col * 40 + (row % 2) * 20}, ${row * 35})`}>
                            <path d="M0 35 Q20 5 40 35" stroke="#FF4500" strokeWidth="1" fill="none" />
                            {/* Circuit nodes */}
                            <circle cx="20" cy="15" r="2" fill="#FF4500" />
                            <line x1="20" y1="17" x2="20" y2="25" stroke="#FF4500" strokeWidth="0.5" />
                        </g>
                    ))
                ))}
            </svg>

            {/* Binary Rain (Japanese Calligraphy Style) - Left Side */}
            <div
                style={{
                    position: 'fixed',
                    left: '20px',
                    top: '100px',
                    opacity: 0.05,
                    pointerEvents: 'none',
                    zIndex: 0,
                    writingMode: 'vertical-rl',
                    fontSize: '14px',
                    letterSpacing: '4px',
                    color: '#FF4500',
                    fontFamily: 'monospace',
                    lineHeight: '2'
                }}
            >
                01001<br />10110<br />00101<br />11010<br />01101
            </div>

            {/* Quantum Atom (Japanese Minimal Style) - Top Left */}
            <svg
                viewBox="0 0 100 100"
                style={{
                    position: 'fixed',
                    top: '80px',
                    left: '100px',
                    width: '150px',
                    height: '150px',
                    opacity: 0.06,
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            >
                {/* Electron orbits */}
                <ellipse cx="50" cy="50" rx="40" ry="15" stroke="#FF4500" strokeWidth="1" fill="none" transform="rotate(0 50 50)" />
                <ellipse cx="50" cy="50" rx="40" ry="15" stroke="#FF4500" strokeWidth="1" fill="none" transform="rotate(60 50 50)" />
                <ellipse cx="50" cy="50" rx="40" ry="15" stroke="#FF4500" strokeWidth="1" fill="none" transform="rotate(120 50 50)" />
                {/* Nucleus */}
                <circle cx="50" cy="50" r="6" fill="#FF4500" opacity="0.5" />
                {/* Electrons */}
                <circle cx="90" cy="50" r="3" fill="#FF4500" />
                <circle cx="30" cy="30" r="3" fill="#FF4500" />
                <circle cx="30" cy="70" r="3" fill="#FF4500" />
            </svg>

            {/* ========== INDIAN-STYLE TECH ELEMENTS ========== */}

            {/* Tech Mandala (Circuit Board Pattern) - Bottom Left */}
            <svg
                viewBox="0 0 200 200"
                style={{
                    position: 'fixed',
                    bottom: '-60px',
                    left: '-60px',
                    width: '400px',
                    height: '400px',
                    opacity: 0.07,
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            >
                {/* Concentric circuit rings */}
                <circle cx="100" cy="100" r="90" stroke="#FFD700" strokeWidth="1" fill="none" strokeDasharray="5,3" />
                <circle cx="100" cy="100" r="70" stroke="#FFD700" strokeWidth="1" fill="none" />
                <circle cx="100" cy="100" r="50" stroke="#FFD700" strokeWidth="1" fill="none" strokeDasharray="3,2" />
                <circle cx="100" cy="100" r="30" stroke="#FFD700" strokeWidth="1" fill="none" />
                {/* Circuit traces radiating out */}
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                    <g key={`trace-${angle}`} transform={`rotate(${angle} 100 100)`}>
                        <line x1="100" y1="100" x2="100" y2="15" stroke="#FFD700" strokeWidth="0.8" />
                        <rect x="97" y="40" width="6" height="6" fill="none" stroke="#FFD700" strokeWidth="0.5" />
                        <circle cx="100" cy="70" r="3" fill="#FFD700" opacity="0.5" />
                    </g>
                ))}
                {/* Center chip */}
                <rect x="85" y="85" width="30" height="30" fill="none" stroke="#FFD700" strokeWidth="1" />
                <rect x="90" y="90" width="20" height="20" fill="#FFD700" opacity="0.2" />
            </svg>

            {/* Neural Network Rangoli - Right Side */}
            <svg
                viewBox="0 0 150 200"
                style={{
                    position: 'fixed',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '180px',
                    height: '240px',
                    opacity: 0.05,
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            >
                {/* Input layer */}
                {[30, 60, 90, 120].map((y) => (
                    <circle key={`in-${y}`} cx="20" cy={y} r="8" stroke="#FFD700" strokeWidth="1" fill="none" />
                ))}
                {/* Hidden layer */}
                {[45, 75, 105].map((y) => (
                    <circle key={`hid-${y}`} cx="75" cy={y} r="8" stroke="#FFD700" strokeWidth="1" fill="none" />
                ))}
                {/* Output layer */}
                {[60, 90].map((y) => (
                    <circle key={`out-${y}`} cx="130" cy={y} r="8" stroke="#FFD700" strokeWidth="1" fill="none" />
                ))}
                {/* Connections */}
                {[30, 60, 90, 120].map((y1) => (
                    [45, 75, 105].map((y2) => (
                        <line key={`conn1-${y1}-${y2}`} x1="28" y1={y1} x2="67" y2={y2} stroke="#FFD700" strokeWidth="0.3" />
                    ))
                ))}
                {[45, 75, 105].map((y1) => (
                    [60, 90].map((y2) => (
                        <line key={`conn2-${y1}-${y2}`} x1="83" y1={y1} x2="122" y2={y2} stroke="#FFD700" strokeWidth="0.3" />
                    ))
                ))}
            </svg>

            {/* Code Brackets (Hindi/Sanskrit Style) - Bottom Right */}
            <div
                style={{
                    position: 'fixed',
                    right: '80px',
                    bottom: '50px',
                    opacity: 0.04,
                    pointerEvents: 'none',
                    zIndex: 0,
                    fontSize: '60px',
                    color: '#FFD700',
                    fontFamily: 'monospace',
                    fontWeight: 100
                }}
            >
                {'</>'}
            </div>

            {/* Hexagonal Grid (Tech + Geometric Indian Pattern) - Center */}
            <svg
                viewBox="0 0 200 150"
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '450px',
                    opacity: 0.025,
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            >
                {[0, 1, 2].map((row) => (
                    [0, 1, 2, 3, 4].map((col) => (
                        <polygon
                            key={`hex-${row}-${col}`}
                            points="30,0 60,17 60,52 30,69 0,52 0,17"
                            stroke="#888890"
                            strokeWidth="0.5"
                            fill="none"
                            transform={`translate(${col * 62 + (row % 2) * 31}, ${row * 52})`}
                        />
                    ))
                ))}
            </svg>

            <main className="bento-grid">
                {/* Row 1-2: Hero + Project 1 + Socials */}
                <HeroCard />

                <ProjectCard
                    className="project-1"
                    image="/backup/project1.jpg"
                    category="Research"
                    year="2026"
                    title="Quantum Comms"
                    subtitle="量子通信"
                />

                <SocialCard
                    className="instagram"
                    icon="instagram"
                    label="Instagram"
                    href="https://instagram.com"
                />

                <SocialCard
                    className="linkedin"
                    icon="linkedin"
                    label="LinkedIn"
                    href="https://linkedin.com"
                />

                {/* Row 3-4: Video + About/Map + Project 2 */}
                <VideoCard />

                <AboutCard />

                <MapCard />

                <ProjectCard
                    className="project-2"
                    image="/backup/project2.jpg"
                    category="AI/ML"
                    year="2025"
                    title="Disaster Response"
                    subtitle="人工知能 データ流"
                />

                {/* Row 5: Quote */}
                <QuoteCard />
            </main>

            <Spotlight />
        </>
    )
}

export default App
