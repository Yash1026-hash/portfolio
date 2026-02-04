// Centralized achievements data for the portfolio - REAL DATA
export const achievements = [
    {
        id: 1,
        title: '3rd Prize - Urban Vision Hackathon',
        category: 'Competition',
        year: '2024',
        description: 'Smart Urban Traffic Reduction project at IISC Bangalore. Built real-time object detection system using YOLO v8l and ResNet for optimizing traffic signals.',
        organization: 'IISC Bangalore',
        highlight: true
    },
    {
        id: 2,
        title: '3rd Prize - VR Siddhartha Hackathon',
        category: 'Competition',
        year: '2023',
        description: 'Lane Keeping Car project demonstrating autonomous vehicle capabilities using OpenCV and Raspberry Pi 4.',
        organization: 'VR Siddhartha University',
        highlight: true
    },
    {
        id: 3,
        title: 'Cadence Spectre Level 1',
        category: 'Certification',
        year: '2024',
        description: 'Professional certification in Cadence Spectre simulation tool for analog circuit design and verification.',
        organization: 'Cadence Design Systems',
        highlight: false
    },
    {
        id: 4,
        title: 'Embedded Systems and IoT Level 1',
        category: 'Certification',
        year: '2024',
        description: 'Certification covering embedded systems fundamentals and Internet of Things applications.',
        organization: 'Professional Certification',
        highlight: false
    },
    {
        id: 5,
        title: 'Vice President - Aparmaya Club',
        category: 'Leadership',
        year: '2024',
        description: 'Leading AI & Autonomous Systems projects at the college technical club. Organizing workshops and hackathons.',
        organization: 'KL Deemed University',
        highlight: true
    },
    {
        id: 6,
        title: 'Core Member - PULSE Broadcasting',
        category: 'Leadership',
        year: '2024',
        description: 'Active member of the ECE Student Body broadcasting team, contributing to department communications.',
        organization: 'KL University ECE Department',
        highlight: false
    },
    {
        id: 7,
        title: 'Perfect 10 CGPA - SSC',
        category: 'Academic',
        year: '2021',
        description: 'Achieved perfect 10/10 CGPA in 10th Standard examinations at ZPHS Konijerla.',
        organization: 'ZPHS Konijerla',
        highlight: true
    }
];

// Get unique categories from achievements
export const achievementCategories = ['All', ...new Set(achievements.map(a => a.category))];
