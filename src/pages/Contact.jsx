import Footer from '../components/Footer';

export default function Contact() {
    return (
        <div className="contact-page obsidian-void" style={{ paddingTop: '160px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="glass-card" style={{ padding: '64px', textAlign: 'center' }}>
                        <div className="micro-label" style={{ color: 'var(--color-chartreuse-pulse)' }}>Transmission_Control</div>
                        <h1 className="heading-display" style={{ fontSize: '64px', margin: '24px 0 40px' }}>Contact.</h1>
                        <p style={{ color: 'var(--color-slate-200)', fontSize: '20px', marginBottom: '64px' }}>
                            Open for research collaborations, technical inquiries, and system architecture discussions.
                        </p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <a href="mailto:yashwanthchowdhary83@gmail.com" className="btn-raycast" style={{ justifyContent: 'center', padding: '16px' }}>
                                Email Engine
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-raycast btn-ghost" style={{ justifyContent: 'center', padding: '16px' }}>
                                LinkedIn Connect
                            </a>
                        </div>

                        <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'center', gap: '32px' }}>
                            <div style={{ textAlign: 'left' }}>
                                <div className="micro-label">Location</div>
                                <div style={{ fontSize: '14px', fontWeight: 600 }}>India // IST</div>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div className="micro-label">Status</div>
                                <div style={{ fontSize: '14px', fontWeight: 600, color: '#59d499' }}>● Online</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
