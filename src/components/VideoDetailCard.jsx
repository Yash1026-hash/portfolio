export default function VideoCard({ video }) {
    const { title, category, description, thumbnail, videoUrl, platform, tools } = video;

    const handleClick = () => {
        window.open(videoUrl, '_blank');
    };

    return (
        <div className="video-detail-card" onClick={handleClick}>
            {/* Thumbnail */}
            <div className="video-thumbnail-container">
                <div
                    className="video-thumbnail"
                    style={{ backgroundImage: `url(${thumbnail})` }}
                />
                <div className="video-overlay">
                    {/* Play Button */}
                    <div className="play-button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>

                {/* Platform Badge */}
                <span className="duration-badge">{platform}</span>

                {/* Category Badge */}
                <span className="video-category-badge">{category}</span>
            </div>

            {/* Content */}
            <div className="video-detail-content">
                <h3 className="video-title">{title}</h3>
                <p className="video-description">{description}</p>

                {/* Tools Used */}
                <div className="video-meta">
                    {tools && tools.map((tool, index) => (
                        <span key={index} className="video-tool-badge">{tool}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
