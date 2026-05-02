// Centralized project data for the portfolio - UPDATED WITH GITHUB REPOS
export const projects = [
    {
        id: 1,
        title: 'KL-CONNECT',
        category: 'Mobile',
        year: '2025',
        description: 'A high-precision connectivity platform built with Dart and Flutter. Focuses on seamless integration and enterprise-grade observability.',
        techStack: ['Dart', 'Flutter', 'Firebase', 'State Management'],
        githubUrl: 'https://github.com/Yash1026-hash/KL-CONNECT',
        liveUrl: null,
        image: '/kl-connect.png',
        featured: true
    },
    {
        id: 2,
        title: 'ChipCycle RL Environment',
        category: 'AI/ML',
        year: '2024',
        description: 'Custom Reinforcement Learning environment for optimizing chip recycling processes. Developed for the Meta OpenEnv hackathon.',
        techStack: ['Python', 'Gymnasium', 'Reinforcement Learning', 'OpenEnv'],
        githubUrl: 'https://github.com/Yash1026-hash/chipcycle-env',
        liveUrl: null,
        image: '/chipcycle.png',
        featured: true
    },
    {
        id: 3,
        title: 'Thermal Floorplan Optimizer',
        category: 'Research',
        year: '2024',
        description: 'Hybrid optimization strategy using PSO (Particle Swarm Optimization) and SA (Simulated Annealing) for thermal-aware VLSI floorplanning.',
        techStack: ['Python', 'PSO', 'Simulated Annealing', 'VLSI Design'],
        githubUrl: 'https://github.com/Yash1026-hash/Hybrid-thermal-floor-planning-using-PSO-and-SA',
        liveUrl: null,
        image: '/thermal.png',
        featured: true
    },
    {
        id: 4,
        title: 'Quick-Rescue',
        category: 'Social Impact',
        year: '2024',
        description: 'Emergency response system that identifies the safest and fastest routes during urban flood events using real-time data.',
        techStack: ['Python', 'GIS', 'Optimization Algorithms', 'Real-time Data'],
        githubUrl: 'https://github.com/Yash1026-hash/Quick-Rescue',
        liveUrl: null,
        image: '/rescue.png',
        featured: true
    },
    {
        id: 5,
        title: 'GHCI-25 Financial Classifier',
        category: 'AI/ML',
        year: '2025',
        description: 'DistilBERT-based classifier for financial transactions, developed for the GHCI-25 Hackathon to improve anomaly detection.',
        techStack: ['Python', 'PyTorch', 'DistilBERT', 'NLP'],
        githubUrl: 'https://github.com/Yash1026-hash/-GHCI-25-Hackathon',
        liveUrl: null,
        image: '/ghci.png',
        featured: true
    },
    {
        id: 6,
        title: 'MANGO - Mango Detection',
        category: 'Computer Vision',
        year: '2025',
        description: 'Deep learning framework for mango detection and classification, published in IEEE research for agricultural automation.',
        techStack: ['Python', 'Deep Learning', 'Computer Vision', 'YOLO'],
        githubUrl: 'https://github.com/Yash1026-hash/MANGO',
        liveUrl: null,
        image: '/mango.png',
        featured: false
    },
    {
        id: 7,
        title: 'RCID - Earthquake Detection',
        category: 'Research',
        year: '2025',
        description: 'Real-Time Co-Seismic Ionospheric Detector using GNSS observations for rapid earthquake hazard confirmation.',
        techStack: ['MATLAB', 'Signal Processing', 'GNSS', 'Geophysics'],
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
