export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <span>
                © {year} Kamsani Yashwanth Chowdhary
                <span className="text-vermilion" style={{ margin: '0 8px' }}>•</span>
                <span className="font-jp" style={{ opacity: 0.7 }}>全ての権利を保有</span>
            </span>
        </footer>
    )
}
