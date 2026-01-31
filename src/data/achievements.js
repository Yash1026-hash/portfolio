// Achievements data for the portfolio
export const achievements = [
    {
        id: 1,
        title: 'Hackathon Winner - Smart India Hackathon',
        category: 'Competition',
        year: '2025',
        description: 'First place in the national Smart India Hackathon for developing an AI-powered disaster response system.',
        icon: 'trophy',
        highlight: true
    },
    {
        id: 2,
        title: 'Research Paper Published - IEEE',
        category: 'Research',
        year: '2025',
        description: 'Published research on Quantum Key Distribution simulation in IEEE International Conference proceedings.',
        icon: 'document',
        highlight: true
    },
    {
        id: 3,
        title: 'Google Cloud Certified - Professional',
        category: 'Certification',
        year: '2025',
        description: 'Achieved Google Cloud Professional certification for cloud architecture and machine learning.',
        icon: 'badge',
        highlight: false
    },
    {
        id: 4,
        title: 'Dean\'s List - Academic Excellence',
        category: 'Academic',
        year: '2024',
        description: 'Recognized on the Dean\'s List for maintaining outstanding academic performance with 9.2 CGPA.',
        icon: 'star',
        highlight: true
    },
    {
        id: 5,
        title: 'Open Source Contributor - 500+ Contributions',
        category: 'Open Source',
        year: '2024',
        description: 'Active contributor to major open source projects including React ecosystem and Python libraries.',
        icon: 'code',
        highlight: false
    },
    {
        id: 6,
        title: 'AWS Solutions Architect Associate',
        category: 'Certification',
        year: '2024',
        description: 'Certified AWS Solutions Architect with expertise in designing distributed systems.',
        icon: 'badge',
        highlight: false
    },
    {
        id: 7,
        title: 'Best Project Award - College Symposium',
        category: 'Academic',
        year: '2024',
        description: 'Won best project award for innovative AI-based traffic management system.',
        icon: 'trophy',
        highlight: false
    },
    {
        id: 8,
        title: 'Coding Competition - State Level Winner',
        category: 'Competition',
        year: '2023',
        description: 'First place in state-level competitive programming contest among 500+ participants.',
        icon: 'trophy',
        highlight: true
    },
    {
        id: 9,
        title: 'Microsoft Azure Fundamentals',
        category: 'Certification',
        year: '2023',
        description: 'Certified in Microsoft Azure cloud fundamentals and services.',
        icon: 'badge',
        highlight: false
    },
    {
        id: 10,
        title: 'Technical Paper Presentation - 1st Place',
        category: 'Academic',
        year: '2023',
        description: 'Won first place in inter-college technical paper presentation on quantum computing applications.',
        icon: 'document',
        highlight: false
    }
];

// Get unique categories
export const achievementCategories = ['All', ...new Set(achievements.map(a => a.category))];
