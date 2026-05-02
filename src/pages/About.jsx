import Footer from '../components/Footer';

export default function About() {
    const education = [
        {
            degree: 'B.Tech in Electronics and Communication Engineering (VLSI)',
            institution: 'KL Deemed University',
            period: '2023 - 2027',
            grade: 'CGPA: 8.29/10'
        },
        {
            degree: 'Diploma in Electronics and Communication Engineering',
            institution: 'Anurag Engineering College',
            period: '2021 - 2024',
            grade: 'CGPA: 9.18/10'
        }
    ];

    const skills = {
        'Programming': ['C', 'C++', 'Verilog', 'Python'],
        'AI & Vision': ['OpenCV', 'YOLO', 'ResNet'],
        'EDA Tools': ['Cadence', 'LTSpice', 'Vivado', 'MATLAB']
    };

    return (
        <div className="about-page obsidian-void" style={{ paddingTop: '160px' }}>
            <div className="container">
                <section className="glass-card" style={{ padding: '64px', marginBottom: '80px', background: 'var(--gradient-nebula)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '64px', alignItems: 'center' }}>
                        <img 
                            src="/backup/profile_zen.jpg" 
                            alt="Profile" 
                            style={{ width: '100%', borderRadius: '12px', filter: 'grayscale(1)', border: '1px solid var(--color-graphite-500)' }} 
                        />
                        <div>
                            <div className="micro-label" style={{ color: 'var(--color-chartreuse-pulse)' }}>Profile_Bio</div>
                            <h1 className="heading-display" style={{ fontSize: '48px', margin: '16px 0 24px' }}>Yashwanth <br /> Chowdhary.</h1>
                            <p style={{ fontSize: '18px', color: 'var(--color-slate-200)', lineHeight: '1.6' }}>
                                Engineering student focused on VLSI Design, Autonomous Systems, and Quantum Research. 
                                Architecting digital infrastructure through a mix of high-level software and low-level hardware integration.
                            </p>
                        </div>
                    </div>
                </section>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                    <section className="glass-card">
                        <div className="micro-label">Education</div>
                        <div style={{ marginTop: '32px' }}>
                            {education.map((edu, index) => (
                                <div key={index} style={{ marginBottom: '32px', borderLeft: '1px solid var(--color-graphite-500)', paddingLeft: '24px' }}>
                                    <h3 style={{ fontSize: '20px', color: 'white' }}>{edu.degree}</h3>
                                    <p className="text-muted">{edu.institution}</p>
                                    <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                                        <span className="micro-label" style={{ fontSize: '10px' }}>{edu.period}</span>
                                        <span className="micro-label" style={{ fontSize: '10px' }}>{edu.grade}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="glass-card">
                        <div className="micro-label">Technical Stack</div>
                        <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                            {Object.entries(skills).map(([category, list]) => (
                                <div key={category}>
                                    <h4 style={{ fontSize: '14px', color: 'var(--color-slate-300)', marginBottom: '12px' }}>{category}</h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {list.map(s => (
                                            <span key={s} style={{ fontSize: '12px', background: 'rgba(255,255,255,0.05)', padding: '4px 12px', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>{s}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}
