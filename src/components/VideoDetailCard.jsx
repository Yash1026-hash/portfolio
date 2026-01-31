export default function VideoCard({ video }) {
    const { title, category, duration, description, thumbnail, youtubeId, views, date } = video;

    const handleClick = () => {
        window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
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

                {/* Duration Badge */}
                <span className="duration-badge">{duration}</span>

                {/* Category Badge */}
                <span className="video-category-badge">{category}</span>
            </div>

            {/* Content */}
            <div className="video-detail-content">
                <h3 className="video-title">{title}</h3>
                <p className="video-description">{description}</p>

                {/* Meta Info */}
                <div className="video-meta">
                    <span className="video-views">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                        {views} views
                    </span>
                    <span className="video-date">{date}</span>
                </div>
            </div>
        </div>
    );
}
