// Centralized video data for the portfolio - REAL Instagram Reels
export const videos = [
    {
        id: 1,
        title: 'Outreach Event',
        category: 'College Events',
        role: 'Shoot + Edit',
        duration: '1:42',
        turnaround: '3 days',
        viewCount: null,
        aspect: 'vertical',
        highlight: 'Premiere Pro sync cut across 6 camera angles',
        description: 'Campus outreach event coverage showcasing community engagement and tech demonstrations.',
        thumbnail: '/outreach.png',
        videoUrl: 'https://www.instagram.com/reel/DTQTttnEx7N/',
        platform: 'Instagram',
        tools: ['Premiere Pro', 'CapCut']
    },
    {
        id: 2,
        title: 'Seniors Convocation',
        category: 'College Events',
        role: 'Edit + Color',
        duration: '0:58',
        turnaround: '2 days',
        viewCount: null,
        aspect: 'vertical',
        highlight: 'Cinematic color grading in DaVinci Resolve',
        description: 'Graduation ceremony highlights celebrating the achievements of senior students.',
        thumbnail: '/convocation.png',
        videoUrl: 'https://www.instagram.com/reel/DSziDw9kzO7/',
        platform: 'Instagram',
        tools: ['DaVinci Resolve']
    },
    {
        id: 3,
        title: 'IEEE RAWCET',
        category: 'Tech',
        role: 'Shoot + Edit',
        duration: '1:15',
        turnaround: '4 days',
        viewCount: null,
        aspect: 'vertical',
        highlight: 'Technical workshop pacing and motion graphics',
        description: 'IEEE RAWCET technical event at KL University featuring workshops and engineering demonstrations.',
        thumbnail: '/ieee.png',
        videoUrl: 'https://www.instagram.com/reel/DSujPXCk0Pe/',
        platform: 'Instagram',
        tools: ['Premiere Pro']
    },
    {
        id: 4,
        title: 'FemFlare Fest Edit',
        category: 'Creative',
        role: 'Edit',
        duration: '0:45',
        turnaround: '12 hours',
        viewCount: null,
        aspect: 'vertical',
        highlight: 'High-energy rhythmic cuts in CapCut',
        description: 'Creative edit for FemFlare cultural fest showcasing performances and celebrations.',
        thumbnail: '/femflare.png',
        videoUrl: 'https://www.instagram.com/p/DUTMDzRgb5h/',
        platform: 'Instagram',
        tools: ['CapCut', 'Premiere Pro']
    }
];

// Get unique categories from videos
export const videoCategories = ['All', ...new Set(videos.map(v => v.category))];

// Video editing tools used
export const editingTools = ['CapCut', 'Premiere Pro', 'DaVinci Resolve'];

// Instagram profile
export const instagramProfile = 'https://www.instagram.com/existential_crisis_0/';
