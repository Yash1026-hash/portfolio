// Centralized project data for the portfolio
export const projects = [
    {
        id: 1,
        title: 'Quantum Communications',
        category: 'Research',
        year: '2026',
        description: 'Research on quantum key distribution (QKD) protocols for secure satellite-to-ground communications. This project involves simulating atmospheric conditions using libRadtran and modeling secure key generation rates for the Micius quantum satellite system.',
        techStack: ['Python', 'Qiskit', 'NumPy', 'libRadtran', 'Matplotlib'],
        githubUrl: 'https://github.com/Yash1026-hash/quantum-comms',
        liveUrl: null,
        image: '/backup/project1.jpg',
        featured: true
    },
    {
        id: 2,
        title: 'Disaster Response AI',
        category: 'AI/ML',
        year: '2025',
        description: 'An intelligent disaster response system that uses machine learning to predict flood patterns, optimize evacuation routes, and coordinate emergency services. Features real-time flood detection and risk-based routing algorithms.',
        techStack: ['Python', 'FastAPI', 'TensorFlow', 'OpenStreetMap', 'React'],
        githubUrl: 'https://github.com/Yash1026-hash/disaster-response',
        liveUrl: 'https://disaster-response.demo.com',
        image: '/backup/project2.jpg',
        featured: true
    },
    {
        id: 3,
        title: 'CreditBridge Platform',
        category: 'Web',
        year: '2025',
        description: 'A fintech platform connecting underbanked communities with micro-lending services. Features credit scoring using alternative data points and a sleek glassmorphism UI design.',
        techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe API'],
        githubUrl: 'https://github.com/Yash1026-hash/creditbridge',
        liveUrl: 'https://creditbridge.demo.com',
        image: '/backup/project1.jpg',
        featured: false
    },
    {
        id: 4,
        title: 'Yojana Rakshak',
        category: 'Web',
        year: '2025',
        description: 'Government scheme verification and tracking system. Integrates with API Setu for income certificate verification and uses geofencing for location-based scheme eligibility checks.',
        techStack: ['FastAPI', 'React', 'PostgreSQL', 'API Setu', 'Bhuvan Maps'],
        githubUrl: 'https://github.com/Yash1026-hash/yojana-rakshak',
        liveUrl: null,
        image: '/backup/project2.jpg',
        featured: false
    },
    {
        id: 5,
        title: 'Neural Network Visualizer',
        category: 'AI/ML',
        year: '2024',
        description: 'Interactive visualization tool for understanding neural network architectures. Allows users to build, train, and visualize neural networks in real-time with intuitive controls.',
        techStack: ['JavaScript', 'D3.js', 'TensorFlow.js', 'WebGL'],
        githubUrl: 'https://github.com/Yash1026-hash/nn-visualizer',
        liveUrl: 'https://nn-viz.demo.com',
        image: '/backup/project1.jpg',
        featured: false
    }
];

// Get unique categories from projects
export const categories = ['All', ...new Set(projects.map(p => p.category))];

// Get featured projects for home page
export const featuredProjects = projects.filter(p => p.featured);
