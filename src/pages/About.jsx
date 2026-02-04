import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function About() {
    const education = [
        {
            degree: 'B.Tech in Electronics and Communication Engineering (VLSI)',
            institution: 'KL Deemed University',
            location: 'Telangana, India',
            period: '2023 - 2027',
            grade: 'CGPA: 8.29/10',
            highlights: [
                'Specialization in VLSI Design',
                'Vice President - Aparmaya Club (AI & Autonomous Systems)',
                'Core Member - PULSE Broadcasting ECE Student Body'
            ]
        },
        {
            degree: 'Diploma in Electronics and Communication Engineering',
            institution: 'Anurag Engineering College',
            location: 'Telangana, India',
            period: '2021 - 2024',
            grade: 'CGPA: 9.18/10',
            highlights: [
                'Strong foundation in electronics fundamentals',
                'Hands-on hardware projects'
            ]
        },
        {
            degree: 'SSC (10th Standard)',
            institution: 'ZPHS Konijerla',
            location: 'Telangana, India',
            period: '2021',
            grade: 'CGPA: 10/10',
            highlights: [
                'Perfect 10 CGPA',
                'School academic excellence'
            ]
        }
    ];

    const skills = {
        'Programming': ['C', 'C++', 'Verilog HDL', 'Python'],
        'AI & Vision': ['OpenCV', 'YOLO v8l', 'ResNet', 'Object Detection'],
        'Embedded': ['ESP32', 'Raspberry Pi 4', 'Hardware-Software Integration'],
        'EDA Tools': ['Cadence', 'LTSpice', 'Vivado', 'MATLAB', 'EasyEDA', 'Multisim'],
        'Other': ['Docker', 'Quantum Communication', 'Circuit Design']
    };

    const interests = [
        { icon: '🔬', label: 'Quantum Computing' },
        { icon: '🤖', label: 'AI & Autonomous Systems' },
        { icon: '🔌', label: 'VLSI Design' },
        { icon: '📡', label: 'Embedded Systems' },
        { icon: '🚗', label: 'Autonomous Vehicles' },
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
                    Engineering student passionate about exploring and learning new technologies.
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
                        <p className="bio-tagline">ECE (VLSI) Undergraduate | AI & Embedded Systems Enthusiast</p>
                        <p className="bio-description">
                            Enthusiastic and curious engineering student passionate about exploring and learning
                            new technologies. An Electronics and Communication Engineering (VLSI) undergraduate
                            with growing interests across multiple domains including hardware, software, and
                            emerging research areas.
                        </p>
                        <p className="bio-description">
                            Always eager to adapt, innovate, and contribute meaningfully to diverse projects
                            and collaborative environments. From autonomous vehicles to quantum communication,
                            I love tackling challenging problems at the intersection of hardware and software.
                        </p>
                        <div className="bio-quick-facts">
                            <div className="quick-fact">
                                <span className="fact-icon">📍</span>
                                <span>Telangana, India</span>
                            </div>
                            <div className="quick-fact">
                                <span className="fact-icon">🎓</span>
                                <span>B.Tech ECE (VLSI)</span>
                            </div>
                            <div className="quick-fact">
                                <span className="fact-icon">💼</span>
                                <span>Open to Opportunities</span>
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
