import { useState, useEffect, useRef } from 'react';
import HeroCard from './HeroCard';
import ProjectCard from './ProjectCard';
import SocialCard from './SocialCard';
import VideoCard from './VideoCard';
import QuoteCard from './QuoteCard';
import MapCard from './MapCard';
import SkillsCard from './SkillsCard';
import ServicesCard from './ServicesCard';
import Footer from './Footer';

// Import actual pages
import Projects from '../pages/Projects';
import Videos from '../pages/Videos';
import Achievements from '../pages/Achievements';
import About from '../pages/About';
import Contact from '../pages/Contact';

const sections = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'videos', label: 'Videos' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
];

// Animated section wrapper
function AnimatedSection({ children, id, className, sectionRef }) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={(el) => {
                elementRef.current = el;
                if (sectionRef) sectionRef(el);
            }}
            id={id}
            className={`scroll-section ${className || ''} ${isVisible ? 'animate-in' : 'animate-out'}`}
        >
            {children}
        </section>
    );
}

export default function FullPageScroll() {
    const [activeSection, setActiveSection] = useState(0);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;

            let newActive = 0;
            sectionRefs.current.forEach((section, index) => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2) {
                        newActive = index;
                    }
                }
            });

            setActiveSection(newActive);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (index) => {
        const section = sectionRefs.current[index];
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="smooth-scroll-container">
            {/* Navigation Dots */}
            <div className="fullpage-nav">
                {sections.map((section, index) => (
                    <button
                        key={section.id}
                        className={`fullpage-dot ${activeSection === index ? 'active' : ''}`}
                        onClick={() => scrollToSection(index)}
                        title={section.label}
                    >
                        <span className="dot-label">{section.label}</span>
                    </button>
                ))}
            </div>

            {/* Section 1: Home */}
            <AnimatedSection
                id="home"
                className="home-section"
                sectionRef={el => sectionRefs.current[0] = el}
            >
                <main className="bento-grid">
                    <HeroCard />
                    <ProjectCard
                        className="project-1"
                        image="/backup/project1.jpg"
                        category="Research"
                        year="2026"
                        title="Quantum Comms"
                    />
                    <SocialCard className="instagram" icon="instagram" label="Instagram" href="https://instagram.com" />
                    <SocialCard className="linkedin" icon="linkedin" label="LinkedIn" href="https://linkedin.com" />
                    <SocialCard className="github" icon="github" label="GitHub" href="https://github.com/Yash1026-hash" />
                    <SocialCard className="email" icon="email" label="Email" href="mailto:yashwanthchowdhary83@gmail.com" />
                    <VideoCard />
                    <SkillsCard />
                    <MapCard />
                    <ProjectCard
                        className="project-2"
                        image="/backup/project2.jpg"
                        category="AI/ML"
                        year="2025"
                        title="Disaster Response"
                    />
                    <QuoteCard />
                    <ServicesCard />
                </main>
            </AnimatedSection>

            {/* Section 2: Projects */}
            <AnimatedSection
                id="projects"
                sectionRef={el => sectionRefs.current[1] = el}
            >
                <Projects />
            </AnimatedSection>

            {/* Section 3: Videos */}
            <AnimatedSection
                id="videos"
                sectionRef={el => sectionRefs.current[2] = el}
            >
                <Videos />
            </AnimatedSection>

            {/* Section 4: Achievements */}
            <AnimatedSection
                id="achievements"
                sectionRef={el => sectionRefs.current[3] = el}
            >
                <Achievements />
            </AnimatedSection>

            {/* Section 5: About */}
            <AnimatedSection
                id="about"
                sectionRef={el => sectionRefs.current[4] = el}
            >
                <About />
            </AnimatedSection>

            {/* Section 6: Contact */}
            <AnimatedSection
                id="contact"
                sectionRef={el => sectionRefs.current[5] = el}
            >
                <Contact />
            </AnimatedSection>
        </div>
    );
}
