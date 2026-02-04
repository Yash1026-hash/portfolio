import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ProjectModal({ project, onClose }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Animate in
        setTimeout(() => setIsVisible(true), 10);
        // Lock body scroll
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        // Cleanup - restore scroll on unmount
        return () => {
            document.body.style.overflow = originalOverflow || 'auto';
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    if (!project) return null;

    const { title, category, year, description, techStack, githubUrl, liveUrl, image, featured } = project;

    const modalContent = (
        <div
            className={`modal-overlay ${isVisible ? 'visible' : ''}`}
            onClick={handleClose}
        >
            <div
                className={`modal-content ${isVisible ? 'visible' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button className="modal-close" onClick={handleClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Hero Image */}
                <div className="modal-image-section">
                    <div
                        className="modal-image"
                        style={{ backgroundImage: `url(${image})` }}
                    />
                    <div className="modal-image-overlay" />

                    {/* Badges */}
                    <div className="modal-badges">
                        {featured && <span className="badge badge-featured">★ Featured</span>}
                        <span className="badge badge-category">{category}</span>
                        <span className="badge badge-year">{year}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="modal-body">
                    <h2 className="modal-title">{title}</h2>

                    <p className="modal-description">{description}</p>

                    {/* Tech Stack */}
                    <div className="modal-section">
                        <h4 className="modal-section-title">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                            </svg>
                            Tech Stack
                        </h4>
                        <div className="modal-tech-stack">
                            {techStack.map((tech, index) => (
                                <span key={index} className="tech-pill-large">{tech}</span>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="modal-actions">
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-btn github-btn"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                View on GitHub
                            </a>
                        )}
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-btn demo-btn"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    // Use React Portal to render modal at document body level
    return createPortal(modalContent, document.body);
}
