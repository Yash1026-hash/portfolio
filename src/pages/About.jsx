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
        }
    ];

    const skills = {
        'Programming': ['C', 'C++', 'Verilog HDL', 'Python'],
        'AI & Vision': ['OpenCV', 'YOLO v8l', 'ResNet', 'Object Detection'],
        'Embedded': ['ESP32', 'Raspberry Pi 4', 'Hardware-Software Integration'],
        'EDA Tools': ['Cadence', 'LTSpice', 'Vivado', 'MATLAB', 'EasyEDA', 'Multisim'],
        'Other': ['Docker', 'Quantum Communication', 'Circuit Design']
    };

    return (
        <div className="about-page transition-light" style={{ minHeight: '100vh', paddingTop: '160px' }}>
            <div className="container">
                {/* Profile Section (Raycast Style) */}
                <section className="section" style={{ background: 'var(--color-void-black)', borderRadius: '32px', padding: '64px', marginBottom: '80px', color: 'white' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '64px', alignItems: 'center' }}>
                        <div className="glass-panel" style={{ padding: '8px' }}>
                            <img 
                                src="/backup/profile_zen.jpg" 
                                alt="Profile" 
                                style={{ width: '100%', borderRadius: '8px', filter: 'grayscale(1)' }} 
                            />
                        </div>
                        <div>
                            <div className="micro-label" style={{ color: 'var(--color-chartreuse-pulse)' }}>Biography</div>
                            <h1 style={{ fontSize: '48px', marginTop: '16px', marginBottom: '24px' }}>Kamsani Yashwanth Chowdhary</h1>
                            <p style={{ fontSize: '18px', color: 'var(--color-slate-200)', lineHeight: '1.6', marginBottom: '32px' }}>
                                Engineering student at the intersection of AI, VLSI, and Research. 
                                Focused on building high-performance systems and exploring the frontiers 
                                of quantum communication and autonomous technologies.
                            </p>
                            <div style={{ display: 'flex', gap: '24px' }}>
                                <div>
                                    <div className="micro-label">Location</div>
                                    <div style={{ fontWeight: 500 }}>Telangana, India</div>
                                </div>
                                <div>
                                    <div className="micro-label">Status</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 500 }}>
                                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#59d499' }}></span>
                                        Open to Collaboration
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Education (Titan Ledger Style) */}
                <section className="section">
                    <div className="micro-label" style={{ color: 'var(--color-midnight-ink)' }}>Academic Foundation</div>
                    <h2 style={{ fontSize: '40px', color: 'var(--color-midnight-ink)', marginTop: '16px', marginBottom: '48px' }}>Education</h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
                        {education.map((edu, index) => (
                            <div key={index} className="card-ledger">
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <h3 style={{ fontSize: '24px' }}>{edu.degree}</h3>
                                        <p className="text-muted" style={{ fontSize: '16px', marginTop: '4px' }}>{edu.institution} • {edu.location}</p>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div className="micro-label">{edu.period}</div>
                                        <div style={{ fontWeight: 600, color: 'var(--color-midnight-ink)' }}>{edu.grade}</div>
                                    </div>
                                </div>
                                <ul style={{ marginTop: '16px', paddingLeft: '20px', color: 'var(--color-gunmetal-gray)' }}>
                                    {edu.highlights.map((h, i) => <li key={i} style={{ marginBottom: '8px' }}>{h}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills (Titan Expanded Style) */}
                <section className="section" style={{ background: 'var(--color-faded-stone)', borderRadius: '32px', padding: '64px', marginTop: '80px' }}>
                    <div className="micro-label" style={{ color: 'var(--color-midnight-ink)' }}>Technical Stack</div>
                    <h2 style={{ fontSize: '40px', color: 'var(--color-midnight-ink)', marginTop: '16px', marginBottom: '48px' }}>Skills & Competencies</h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
                        {Object.entries(skills).map(([category, skillList]) => (
                            <div key={category}>
                                <h3 style={{ fontSize: '18px', color: 'var(--color-midnight-ink)', marginBottom: '16px', borderBottom: '1px solid var(--color-soft-concrete)', paddingBottom: '8px' }}>
                                    {category}
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {skillList.map((skill, i) => (
                                        <span key={i} className="btn-obsidian" style={{ background: 'white', padding: '6px 16px', fontSize: '13px', color: 'var(--color-midnight-ink)', boxShadow: 'none', border: '1px solid var(--color-soft-concrete)' }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <div style={{ marginTop: '120px' }}>
                <Footer />
            </div>
        </div>
    );
}
