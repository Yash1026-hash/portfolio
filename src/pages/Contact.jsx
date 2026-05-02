import { useState } from 'react';
import Footer from '../components/Footer';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const { name, email, subject, message } = formData;
        const bodyContent = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:yashwanthchowdhary83@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;

        window.location.href = mailtoLink;

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1000);
    };

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/Yash1026-hash' },
        { name: 'LinkedIn', url: 'https://linkedin.com' },
        { name: 'Instagram', url: 'https://www.instagram.com/existential_crisis_0/' },
        { name: 'Email', url: 'mailto:yashwanthchowdhary83@gmail.com' }
    ];

    return (
        <div className="contact-page transition-light" style={{ minHeight: '100vh', paddingTop: '160px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
                    {/* Contact Info (Raycast Style) */}
                    <div style={{ background: 'var(--color-void-black)', borderRadius: '32px', padding: '64px', color: 'white' }}>
                        <div className="micro-label" style={{ color: 'var(--color-chartreuse-pulse)' }}>Connect</div>
                        <h1 style={{ fontSize: '48px', marginTop: '16px', marginBottom: '32px' }}>Get in Touch</h1>
                        <p style={{ color: 'var(--color-slate-200)', fontSize: '18px', marginBottom: '48px', lineHeight: '1.6' }}>
                            Have a project in mind or want to collaborate? 
                            I'd love to hear from you. My inbox is always open.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            {socialLinks.map(link => (
                                <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="btn-obsidian btn-ghost-dark" style={{ justifyContent: 'center' }}>
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div style={{ marginTop: '64px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
                            <div className="micro-label">Status</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px', fontWeight: 500 }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#59d499' }}></span>
                                Usually responds within 24h
                            </div>
                        </div>
                    </div>

                    {/* Contact Form (Titan Style) */}
                    <div>
                        <div className="micro-label" style={{ color: 'var(--color-midnight-ink)' }}>Inquiry Form</div>
                        <h2 style={{ fontSize: '40px', color: 'var(--color-midnight-ink)', marginTop: '16px', marginBottom: '48px' }}>Send a Message</h2>

                        {submitted ? (
                            <div className="card-ledger" style={{ textAlign: 'center', padding: '64px' }}>
                                <h3 style={{ fontSize: '24px' }}>Message Sent!</h3>
                                <p className="text-muted" style={{ marginTop: '16px', marginBottom: '32px' }}>Thank you for reaching out. I'll get back to you soon.</p>
                                <button onClick={() => setSubmitted(false)} className="btn-obsidian btn-chartreuse">
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label className="micro-label">Name</label>
                                        <input 
                                            type="text" name="name" value={formData.name} onChange={handleChange} required 
                                            style={{ padding: '16px', borderRadius: '0px', border: '1px solid var(--color-soft-concrete)', background: 'var(--color-faded-stone)', outline: 'none' }}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label className="micro-label">Email</label>
                                        <input 
                                            type="email" name="email" value={formData.email} onChange={handleChange} required 
                                            style={{ padding: '16px', borderRadius: '0px', border: '1px solid var(--color-soft-concrete)', background: 'var(--color-faded-stone)', outline: 'none' }}
                                        />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label className="micro-label">Subject</label>
                                    <input 
                                        type="text" name="subject" value={formData.subject} onChange={handleChange} required 
                                        style={{ padding: '16px', borderRadius: '0px', border: '1px solid var(--color-soft-concrete)', background: 'var(--color-faded-stone)', outline: 'none' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label className="micro-label">Message</label>
                                    <textarea 
                                        name="message" value={formData.message} onChange={handleChange} required rows="5"
                                        style={{ padding: '16px', borderRadius: '0px', border: '1px solid var(--color-soft-concrete)', background: 'var(--color-faded-stone)', outline: 'none', resize: 'none' }}
                                    />
                                </div>
                                <button type="submit" className="btn-obsidian btn-chartreuse" disabled={isSubmitting} style={{ width: '100%', justifyContent: 'center' }}>
                                    {isSubmitting ? 'Transmitting...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '120px' }}>
                <Footer />
            </div>
        </div>
    );
}
