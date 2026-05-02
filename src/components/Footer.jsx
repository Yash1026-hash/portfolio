export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer style={{ 
            padding: '48px 0', 
            textAlign: 'center', 
            borderTop: '1px solid var(--color-soft-concrete)',
            background: 'var(--color-ghost-canvas)',
            color: 'var(--color-gunmetal-gray)',
            fontSize: '13px'
        }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="micro-label" style={{ letterSpacing: '0.2em' }}>
                        © {year} Kamsani Yashwanth Chowdhary
                    </div>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <a href="https://github.com/Yash1026-hash" target="_blank" rel="noreferrer" className="text-muted" style={{ textDecoration: 'none' }}>GitHub</a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted" style={{ textDecoration: 'none' }}>LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
