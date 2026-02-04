// Centralized video data for the portfolio - REAL Instagram Reels
export const videos = [
    {
        id: 1,
        title: 'Outreach Event',
        category: 'College Events',
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
