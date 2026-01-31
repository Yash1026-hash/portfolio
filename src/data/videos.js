// Centralized video data for the portfolio
export const videos = [
    {
        id: 1,
        title: 'Introduction to Quantum Computing',
        category: 'Educational',
        duration: '12:34',
        description: 'A beginner-friendly introduction to quantum computing concepts, covering qubits, superposition, and entanglement.',
        thumbnail: '/backup/video1.jpg',
        youtubeId: 'dQw4w9WgXcQ',
        views: '15K',
        date: 'Jan 2026'
    },
    {
        id: 2,
        title: 'Building AI-Powered Disaster Response',
        category: 'Project Demo',
        duration: '18:45',
        description: 'Deep dive into the development of an AI system for disaster response, featuring real-time flood detection and evacuation routing.',
        thumbnail: '/backup/project2.jpg',
        youtubeId: 'dQw4w9WgXcQ',
        views: '8.2K',
        date: 'Dec 2025'
    },
    {
        id: 3,
        title: 'React Performance Optimization Tips',
        category: 'Tutorial',
        duration: '24:12',
        description: 'Practical tips and techniques for optimizing React applications, from memo to lazy loading and beyond.',
        thumbnail: '/backup/project1.jpg',
        youtubeId: 'dQw4w9WgXcQ',
        views: '22K',
        date: 'Nov 2025'
    },
    {
        id: 4,
        title: 'Satellite QKD Simulation Walkthrough',
        category: 'Research',
        duration: '32:18',
        description: 'Technical walkthrough of satellite-to-ground quantum key distribution simulation using Python and libRadtran.',
        thumbnail: '/backup/video1.jpg',
        youtubeId: 'dQw4w9WgXcQ',
        views: '5.4K',
        date: 'Oct 2025'
    },
    {
        id: 5,
        title: 'Designing with Glassmorphism',
        category: 'Design',
        duration: '15:22',
        description: 'How to create stunning glassmorphism UI designs using CSS backdrop-filter and modern design principles.',
        thumbnail: '/backup/project2.jpg',
        youtubeId: 'dQw4w9WgXcQ',
        views: '12K',
        date: 'Sep 2025'
    },
    {
        id: 6,
        title: 'Machine Learning Model Deployment',
        category: 'Tutorial',
        duration: '28:56',
        description: 'End-to-end guide on deploying ML models to production using FastAPI, Docker, and cloud services.',
        thumbnail: '/backup/project1.jpg',
        youtubeId: 'dQw4w9WgXcQ',
        views: '18K',
        date: 'Aug 2025'
    },
    // Personal Videos
    {
        id: 7,
        title: 'Day in My Life as a Student Developer',
        category: 'Personal',
        duration: '10:45',
        description: 'A casual vlog showing my daily routine balancing college, coding, and personal projects.',
        thumbnail: '/backup/project1.jpg',
        youtubeId: 'dQw4w9WgXcQ',
        views: '3.2K',
        date: 'Jan 2026'
    },
    {
        id: 8,
        title: 'My Workspace Setup Tour 2026',
        category: 'Personal',
        duration: '8:30',
        description: 'Complete tour of my home office and coding setup, including all the gear and tools I use daily.',
        thumbnail: '/backup/video1.jpg',
        youtubeId: 'dQw4w9WgXcQ',
        views: '5.8K',
        date: 'Dec 2025'
    },
    {
        id: 9,
        title: 'Learning Journey: From Beginner to Developer',
        category: 'Personal',
        duration: '14:20',
        description: 'My honest story of how I started coding and the challenges I faced along the way.',
        thumbnail: '/backup/project2.jpg',
        youtubeId: 'dQw4w9WgXcQ',
        views: '7.1K',
        date: 'Nov 2025'
    },
    // College Events
    {
        id: 10,
        title: 'TechFest 2025 Highlights',
        category: 'College Events',
        duration: '6:45',
        description: 'Highlights from our annual technical festival featuring hackathons, workshops, and guest speakers.',
        thumbnail: '/backup/project1.jpg',
        youtubeId: 'dQw4w9WgXcQ',
        views: '2.4K',
        date: 'Oct 2025'
    },
    {
        id: 11,
        title: 'Hackathon Victory: 24 Hours of Coding',
        category: 'College Events',
        duration: '12:15',
        description: 'Behind the scenes of our team winning the inter-college hackathon with an AI-powered solution.',
        thumbnail: '/backup/video1.jpg',
        youtubeId: 'dQw4w9WgXcQ',
        views: '4.5K',
        date: 'Sep 2025'
    },
    {
        id: 12,
        title: 'Guest Lecture: Future of AI in India',
        category: 'College Events',
        duration: '45:30',
        description: 'Recording of an inspiring guest lecture by industry experts on the future of AI and its impact in India.',
        thumbnail: '/backup/project2.jpg',
        youtubeId: 'dQw4w9WgXcQ',
        views: '1.8K',
        date: 'Aug 2025'
    },
    {
        id: 13,
        title: 'College Cultural Fest: Rhythm 2025',
        category: 'College Events',
        duration: '8:50',
        description: 'Best moments from our cultural festival including performances, competitions, and celebrations.',
        thumbnail: '/backup/project1.jpg',
        youtubeId: 'dQw4w9WgXcQ',
        views: '3.9K',
        date: 'Jul 2025'
    }
];

// Get unique categories from videos
export const videoCategories = ['All', ...new Set(videos.map(v => v.category))];
