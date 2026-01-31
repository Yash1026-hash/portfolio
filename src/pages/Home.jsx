import HeroCard from '../components/HeroCard'
import ProjectCard from '../components/ProjectCard'
import SocialCard from '../components/SocialCard'
import VideoCard from '../components/VideoCard'
import QuoteCard from '../components/QuoteCard'
import MapCard from '../components/MapCard'
import SkillsCard from '../components/SkillsCard'
import ServicesCard from '../components/ServicesCard'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <main className="bento-grid">
                {/* Row 1-2: Hero + Project 1 + Socials */}
                <HeroCard />

                <ProjectCard
                    className="project-1"
                    image="/backup/project1.jpg"
                    category="Research"
                    year="2026"
                    title="Quantum Comms"
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

                <SocialCard
                    className="github"
                    icon="github"
                    label="GitHub"
                    href="https://github.com/Yash1026-hash"
                />

                <SocialCard
                    className="email"
                    icon="email"
                    label="Email"
                    href="mailto:yashwanthchowdhary83@gmail.com"
                />

                {/* Row 3-4: Video + Skills/Map + Project 2 */}
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

                {/* Row 5: Quote + Services */}
                <QuoteCard />

                <ServicesCard />

                {/* Footer */}
                <Footer />
            </main>
        </>
    )
}

