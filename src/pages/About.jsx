import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function About() {
    const education = [
        {
            degree: 'B.Tech in Computer Science & Engineering',
            institution: 'Your University Name',
            location: 'City, India',
            period: '2022 - 2026',
            grade: 'CGPA: 9.2/10',
            highlights: [
                'Specialization in AI/ML and Quantum Computing',
                'Dean\'s List for Academic Excellence',
                'Active member of Technical Club'
            ]
        },
        {
            degree: 'Higher Secondary (XII)',
            institution: 'Your School Name',
            location: 'City, India',
            period: '2020 - 2022',
            grade: 'Percentage: 95%',
            highlights: [
                'Science Stream with Computer Science',
                'School Topper in Mathematics',
                'National Level Science Olympiad Participant'
            ]
        },
        {
            degree: 'Secondary School (X)',
            institution: 'Your School Name',
            location: 'City, India',
            period: '2020',
            grade: 'Percentage: 92%',
            highlights: [
                'School Academic Excellence Award',
                'Inter-school Coding Competition Winner'
            ]
        }
    ];

    const skills = {
        'Languages': ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java'],
        'Frontend': ['React', 'Next.js', 'HTML/CSS', 'Tailwind'],
        'Backend': ['Node.js', 'FastAPI', 'Django', 'Express'],
        'AI/ML': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
        'Cloud': ['AWS', 'Google Cloud', 'Azure', 'Docker'],
        'Databases': ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase']
    };

    const interests = [
        { icon: '🔬', label: 'Quantum Computing' },
        { icon: '🤖', label: 'Artificial Intelligence' },
        { icon: '🌐', label: 'Web Development' },
        { icon: '📡', label: 'Satellite Communications' },
        { icon: '🎨', label: 'UI/UX Design' },
        { icon: '📚', label: 'Research' }
    ];

    return (
        <div className="about-page">
            {/* Page Header */}
            <div className="page-header">
                <Link to="/" className="back-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    <span>Back</span>
                </Link>

                <div className="page-title-section">
                    <h1 className="page-title">About Me</h1>
                </div>

                <p className="page-description">
                    Engineering student passionate about bridging technology and innovation.
                </p>
            </div>

            {/* Bio Section */}
            <section className="about-section bio-section">
                <div className="bio-content">
                    <div className="bio-image">
                        <img src="/backup/profile_zen.jpg" alt="Profile" />
                    </div>
                    <div className="bio-text">
                        <h2>Kamsani Yashwanth Chowdhary</h2>
                        <p className="bio-tagline">Engineering Student & Researcher</p>
                        <p className="bio-description">
                            I'm a passionate engineering student exploring the intersection of AI,
                            Quantum Computing, and Design. Currently pursuing my B.Tech, I spend my time
                            building innovative projects, contributing to open source, and researching
                            cutting-edge technologies.
                        </p>
                        <p className="bio-description">
                            My journey in tech started with a curiosity about how things work, which
                            evolved into a deep passion for creating solutions that make a difference.
                            From disaster response systems to quantum communication simulations, I love
                            tackling challenging problems.
                        </p>
                        <div className="bio-quick-facts">
                            <div className="quick-fact">
                                <span className="fact-icon">📍</span>
                                <span>Based in India</span>
                            </div>
                            <div className="quick-fact">
                                <span className="fact-icon">🎓</span>
                                <span>B.Tech Student</span>
                            </div>
                            <div className="quick-fact">
                                <span className="fact-icon">💼</span>
                                <span>Open to Research</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Timeline */}
            <section className="about-section">
                <h2 className="section-title">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                    Education
                </h2>
                <div className="education-timeline">
                    {education.map((edu, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3 className="timeline-degree">{edu.degree}</h3>
                                    <span className="timeline-period">{edu.period}</span>
                                </div>
                                <p className="timeline-institution">{edu.institution}</p>
                                <p className="timeline-location">{edu.location}</p>
                                <span className="timeline-grade">{edu.grade}</span>
                                <ul className="timeline-highlights">
                                    {edu.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section className="about-section">
                <h2 className="section-title">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                    </svg>
                    Skills & Technologies
                </h2>
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category} className="skill-category">
                            <h3 className="skill-category-title">{category}</h3>
                            <div className="skill-pills">
                                {skillList.map((skill, i) => (
                                    <span key={i} className="skill-pill">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Interests Section */}
            <section className="about-section">
                <h2 className="section-title">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                    </svg>
                    Interests
                </h2>
                <div className="interests-grid">
                    {interests.map((interest, index) => (
                        <div key={index} className="interest-card">
                            <span className="interest-icon">{interest.icon}</span>
                            <span className="interest-label">{interest.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <div className="about-footer">
                <Footer />
            </div>
        </div>
    );
}
