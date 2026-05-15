import { useState } from 'react';
import Footer from '../components/Footer';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');
        try {
            const res = await fetch('https://formspree.io/f/mojroypz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setFormStatus('sent');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setFormStatus(null), 4000);
            } else { setFormStatus('error'); }
        } catch { setFormStatus('error'); }
    };

    const inputStyle = {
        background: 'var(--bg-tertiary)', border: 'var(--hud-border)',
        padding: '14px 16px', color: 'var(--text-primary)',
        fontFamily: 'var(--font-mono)', fontSize: '13px', outline: 'none', width: '100%'
    };

    return (
        <div className="contact-page" style={{ paddingTop: '160px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="card-tactical" style={{ padding: '64px', textAlign: 'center' }}>
                        <div className="mono-label" style={{ color: 'var(--color-neon-red)' }}>ESTABLISH_COMM_LINK</div>
                        <h1 style={{ fontSize: '64px', margin: '24px 0 40px', fontWeight: 200 }}>CONTACT_</h1>
                        <p style={{ color: 'var(--color-ash)', opacity: 0.6, fontSize: '20px', marginBottom: '24px', fontFamily: 'var(--font-mono)' }}>
                            Secure channel for research collaborations and technical inquiries.
                        </p>
                        <div style={{ marginBottom: '48px' }}>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', color: 'var(--text-primary)', userSelect: 'all', padding: '8px 16px', background: 'var(--bg-tertiary)', border: 'var(--hud-border)', display: 'inline-block' }}>
                                yashwanthchowdhary83@gmail.com
                            </span>
                        </div>
                        <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '48px' }}>
                            <a href="mailto:yashwanthchowdhary83@gmail.com" className="btn-primary-red" style={{ justifyContent: 'center', padding: '16px' }}>OPEN_MAIL_CLIENT</a>
                            <a href="https://www.linkedin.com/in/kamsani-yashwanth-chowdhary" target="_blank" rel="noreferrer" className="btn-primary-red" style={{ justifyContent: 'center', padding: '16px', background: 'transparent', border: '1px solid var(--accent-secondary)', color: 'var(--text-primary)' }}>LINKEDIN_PROFILE</a>
                        </div>
                        <div style={{ borderTop: 'var(--hud-border)', paddingTop: '48px', textAlign: 'left' }}>
                            <div className="mono-label" style={{ marginBottom: '24px' }}>DIRECT_MESSAGE</div>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                    <input type="text" name="name" placeholder="NAME" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={inputStyle} />
                                    <input type="email" name="email" placeholder="EMAIL" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={inputStyle} />
                                </div>
                                <textarea name="message" placeholder="MESSAGE" required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} style={{...inputStyle, resize: 'vertical'}} />
                                <button type="submit" className="btn-primary-red" disabled={formStatus === 'sending'} style={{ justifyContent: 'center', padding: '16px', width: '100%' }}>
                                    {formStatus === 'sending' ? 'TRANSMITTING...' : formStatus === 'sent' ? '✓ MESSAGE_SENT' : 'SEND_MESSAGE'}
                                </button>
                                {formStatus === 'error' && <p style={{ color: '#ef4444', fontFamily: 'var(--font-mono)', fontSize: '12px', textAlign: 'center' }}>Transmission failed. Use email above.</p>}
                            </form>
                        </div>
                        <div className="flex-mobile-wrap" style={{ marginTop: '48px', display: 'flex', justifyContent: 'center', gap: '64px', borderTop: 'var(--hud-border)', paddingTop: '40px' }}>
                            <div style={{ textAlign: 'left' }}><div className="mono-label">COORDINATES</div><div style={{ fontSize: '14px', fontWeight: 600 }}>INDIA // IST (UTC+5:30)</div></div>
                            <div style={{ textAlign: 'left' }}><div className="mono-label">LINK_STATUS</div><div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-neon-red)' }}>ONLINE_ACTIVE</div></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
