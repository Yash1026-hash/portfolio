import Footer from '../components/Footer';

export default function About() {
    const education = [
        {
            degree: 'B.Tech in Electronics and Communication Engineering (VLSI)',
            institution: 'KL Deemed University',
            period: '2023 - 2027',
            grade: '8.29 CGPA',
            highlights: ['Specialization in VLSI Design', 'Vice President - Aparmaya Club', 'Core Member - PULSE Broadcasting']
        },
        {
            degree: 'Diploma in Electronics and Communication Engineering',
            institution: 'Anurag Engineering College',
            period: '2021 - 2024',
            grade: '9.18 CGPA'
        },
        {
            degree: 'SSC (10th Standard)',
            institution: 'ZPHS Konijerla',
            period: '2021',
            grade: '10/10 CGPA'
        }
    ];

    const skills = {
        'Programming': ['C', 'C++', 'Verilog HDL', 'Python'],
        'AI & Vision': ['OpenCV', 'YOLO v8l', 'ResNet', 'Object Detection'],
        'EDA Tools': ['Cadence', 'LTSpice', 'Vivado', 'MATLAB', 'EasyEDA', 'Multisim']
    };

    return (
        <div className="about-page" style={{ paddingTop: '160px' }}>
            <div className="container">
                <section className="card-tactical" style={{ marginBottom: '80px', display: 'grid', gridTemplateColumns: '300px 1fr', gap: '64px', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <img src="/backup/profile_zen.jpg" alt="Profile" style={{ width: '100%', filter: 'grayscale(1) contrast(1.2)' }} />
                        <div style={{ position: 'absolute', inset: 0, border: 'var(--hud-border)', opacity: 0.3 }}></div>
                    </div>
                    <div style={{ minWidth: 0 }}>
                        <div className="mono-label">IDENTITY_RECORD // SEC_01</div>
                        <h1 style={{ fontSize: 'clamp(24px, 4vw, 42px)', margin: '16px 0 32px', fontWeight: 200, wordBreak: 'break-word', overflowWrap: 'anywhere' }}>K_YASHWANTH_CHOWDHARY_</h1>
                        <p style={{ fontSize: '18px', color: 'var(--color-ash)', opacity: 0.7, lineHeight: '1.8' }}>
                            Electronics and Communication Engineering student specialized in VLSI. 
                            Research focus in AI-driven automation, autonomous systems, and 
                            high-performance circuit design.
                        </p>
                    </div>
                </section>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                    <section className="card-tactical">
                        <div className="mono-label" style={{ marginBottom: '32px' }}>ACADEMIC_HISTORY</div>
                        {education.map((edu, i) => (
                            <div key={i} style={{ marginBottom: '32px', borderLeft: 'var(--hud-border)', paddingLeft: '24px' }}>
                                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)' }}>{edu.degree}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                                    <span style={{ fontSize: '14px', color: 'var(--color-ash)', opacity: 0.6 }}>{edu.institution}</span>
                                    <span className="mono-label" style={{ fontSize: '10px' }}>{edu.period}</span>
                                </div>
                                <div style={{ marginTop: '8px', color: 'var(--color-neon-red)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>{edu.grade}</div>
                            </div>
                        ))}
                    </section>

                    <section className="card-tactical">
                        <div className="mono-label" style={{ marginBottom: '32px' }}>TECHNICAL_SPECIFICATIONS</div>
                        {Object.entries(skills).map(([cat, list]) => (
                            <div key={cat} style={{ marginBottom: '24px' }}>
                                <h4 style={{ fontSize: '12px', color: 'var(--color-slate-gray)', marginBottom: '12px', fontFamily: 'var(--font-mono)' }}>{cat.toUpperCase()}</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {list.map(s => (
                                        <span key={s} style={{ fontSize: '11px', color: 'var(--text-primary)', background: 'var(--bg-tertiary)', padding: '4px 12px', border: 'var(--hud-border)' }}>{s}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}
