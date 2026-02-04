// Centralized project data for the portfolio - REAL DATA
export const projects = [
    {
        id: 1,
        title: 'Quantum Communication Simulator',
        category: 'Research',
        year: '2025',
        description: 'Building a simulation tool to identify optimal ground station locations for satellite communication. Uses QKD (Quantum Key Distribution) protocols to enhance satellite communication security, analyzing environmental factors affecting signal strength.',
        techStack: ['Python', 'Quantum Computing', 'Simulation', 'Data Analysis'],
        githubUrl: 'https://github.com/Yash1026-hash/quantum-comms',
        liveUrl: null,
        image: '/quantum.png',
        featured: true
    },
    {
        id: 2,
        title: 'Smart Urban Traffic Reduction',
        category: 'AI/ML',
        year: '2024',
        description: 'Real-time object detection system using YOLO v8l and ResNet for optimizing traffic signals in urban areas. Won 3rd Prize at Urban Vision Hackathon (IISC Bangalore). Deployed with Docker and integrated sensor data for dynamic decision making.',
        techStack: ['YOLO v8l', 'ResNet', 'OpenCV', 'Docker', 'Python'],
        githubUrl: 'https://github.com/Yash1026-hash/smart-traffic',
        liveUrl: null,
        image: '/traffic.png',
        featured: true
    },
    {
        id: 3,
        title: 'Lane Keeping Car',
        category: 'Embedded',
        year: '2023',
        description: 'Autonomous vehicle using OpenCV and Raspberry Pi 4 with self-steering capabilities for safe navigation. Won 3rd Prize at VR Siddhartha Hackathon. Implemented lane detection algorithms for real-time adjustments in varied lighting and road conditions.',
        techStack: ['OpenCV', 'Raspberry Pi 4', 'Python', 'Computer Vision'],
        githubUrl: 'https://github.com/Yash1026-hash/lane-keeping-car',
        liveUrl: null,
        image: '/lane.png',
        featured: true
    },
    {
        id: 4,
        title: 'MANGO - Mango Detection',
        category: 'AI/ML',
        year: '2025',
        description: 'Computer vision project for IEEE research focused on mango detection and classification using deep learning techniques. Implements object detection for agricultural applications.',
        techStack: ['Python', 'Deep Learning', 'Computer Vision', 'Object Detection'],
        githubUrl: 'https://github.com/Yash1026-hash/MANGO',
        liveUrl: null,
        image: '/mango.png',
        featured: false
    },
    {
        id: 5,
        title: 'Indo-Japanese Portfolio',
        category: 'Web',
        year: '2025',
        description: 'Personal portfolio website with a unique Indo-Japanese aesthetic, featuring a bento-grid layout, React + Vite, Tailwind CSS, and responsive design. Showcases projects, achievements, and contact information.',
        techStack: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'CSS3'],
        githubUrl: 'https://github.com/Yash1026-hash/portfolio',
        liveUrl: null,
        image: '/portfolio.png',
        featured: true
    },
    {
        id: 6,
        title: 'RCID - Earthquake Detection',
        category: 'Research',
        year: '2025',
        description: 'Real-Time Co-Seismic Ionospheric Detector (RCID) - AI-enabled framework using GNSS observations for earthquake detection. Monitors ionospheric TEC perturbations to provide rapid post-earthquake hazard confirmation. Presented at Space Summit ECE.',
        techStack: ['MATLAB', 'GNSS', 'AI/CNN', 'Ionospheric TEC', 'Signal Processing'],
        githubUrl: null,
        liveUrl: null,
        image: '/rcid.png',
        featured: true,
        ongoing: true
    }
];

// Get unique categories from projects
export const categories = ['All', ...new Set(projects.map(p => p.category))];

// Get featured projects for home page
export const featuredProjects = projects.filter(p => p.featured);
