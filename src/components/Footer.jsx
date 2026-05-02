export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer style={{ 
            padding: '80px 0', 
            textAlign: 'center', 
            borderTop: '1px solid var(--color-graphite-600)',
            background: 'var(--color-void-black)',
            color: 'var(--color-slate-300)',
            fontSize: '12px',
            fontFamily: 'var(--font-mono)'
        }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ opacity: 0.5 }}>
                        © {year} KAMSANI_YASHWANTH_CHOWDHARY // SYSTEM_VERSION_3.0
                    </div>
                    <div style={{ display: 'flex', gap: '32px' }}>
                        <a href="https://github.com/Yash1026-hash" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GITHUB</a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LINKEDIN</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
