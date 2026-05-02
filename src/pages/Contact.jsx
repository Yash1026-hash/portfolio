import Footer from '../components/Footer';

export default function Contact() {
    return (
        <div className="contact-page" style={{ paddingTop: '160px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="card-tactical" style={{ padding: '64px', textAlign: 'center' }}>
                        <div className="mono-label" style={{ color: 'var(--color-neon-red)' }}>ESTABLISH_COMM_LINK</div>
                        <h1 style={{ fontSize: '64px', margin: '24px 0 40px', fontWeight: 200 }}>CONTACT_</h1>
                        <p style={{ color: 'var(--color-ash)', opacity: 0.6, fontSize: '20px', marginBottom: '64px', fontFamily: 'var(--font-mono)' }}>
                            Secure channel for research collaborations and technical inquiries.
                        </p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            <a href="mailto:yashwanthchowdhary83@gmail.com" className="btn-primary-red" style={{ justifyContent: 'center', padding: '16px' }}>
                                OPEN_MAIL_CLIENT
                            </a>
                            <a href="https://www.linkedin.com/in/kamsani-yashwanth-chowdhary" target="_blank" rel="noreferrer" className="btn-primary-red" style={{ justifyContent: 'center', padding: '16px', background: 'transparent', border: '1px solid var(--color-neon-red)' }}>
                                LINKEDIN_PROFILE
                            </a>
                        </div>

                        <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center', gap: '64px', borderTop: '1px solid #111', paddingTop: '40px' }}>
                            <div style={{ textAlign: 'left' }}>
                                <div className="mono-label">COORDINATES</div>
                                <div style={{ fontSize: '14px', fontWeight: 600 }}>INDIA // IST (UTC+5:30)</div>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div className="mono-label">LINK_STATUS</div>
                                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-neon-red)' }}>ONLINE_ACTIVE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
