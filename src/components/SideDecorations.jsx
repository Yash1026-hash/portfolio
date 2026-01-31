export default function SideDecorations() {
    return (
        <>
            {/* Left Side Decoration */}
            <div className="side-decoration left-decoration">
                <div className="deco-line"></div>
                <div className="deco-text vertical-text">
                    <span className="deco-label">PORTFOLIO</span>
                    <span className="deco-year">2026</span>
                </div>
                <div className="deco-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* Right Side Decoration */}
            <div className="side-decoration right-decoration">
                <div className="deco-scroll-hint">
                    <div className="scroll-line"></div>
                    <span className="scroll-text">SCROLL</span>
                </div>
                <div className="deco-coordinates">
                    <span>17.3850° N</span>
                    <span>78.4867° E</span>
                </div>
                <div className="deco-status">
                    <span className="status-indicator"></span>
                    <span className="status-text">ONLINE</span>
                </div>
            </div>
        </>
    );
}
