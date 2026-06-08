// Centralized project data for the portfolio - UPDATED WITH REAL PROJECTS
export const projects = [
    {
        id: 1,
        title: 'Traffic Density Analyzer',
        category: 'AI/ML',
        year: '2024',
        description: 'Smart urban traffic density estimation and signal optimization using YOLO v8l and ResNet. Achieved Top 3 out of 200+ teams at IISc Bangalore Urban Vision Hackathon.',
        techStack: ['Python', 'YOLO v8l', 'ResNet', 'OpenCV', 'Real-time Detection'],
        githubUrl: 'https://github.com/Yash1026-hash',
        liveUrl: null,
        image: '/traffic.png',
        featured: true
    },
    {
        id: 2,
        title: 'FPGA DSP Chain',
        category: 'VLSI',
        year: '2025',
        description: 'Five-IP AXI4-Stream digital signal processing pipeline on Xilinx Artix-7 FPGA. Implements FIR filter, FFT, decimator, interpolator, and gain control with full AXI4 compliance.',
        techStack: ['Verilog', 'Vivado', 'AXI4-Stream', 'Artix-7', 'DSP'],
        githubUrl: 'https://github.com/Yash1026-hash',
        liveUrl: null,
        image: '/quantum.png',
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
        title: 'MANGO — Disease Detection',
        category: 'Computer Vision',
        year: '2025',
        description: 'YOLOv8-based deep learning framework for mango disease detection and classification, published in IEEE research for agricultural automation.',
        techStack: ['Python', 'YOLOv8', 'Deep Learning', 'Computer Vision'],
        githubUrl: 'https://github.com/Yash1026-hash/MANGO',
        liveUrl: null,
        image: '/mango.png',
        featured: true
    },
    {
        id: 5,
        title: 'Autonomous Lane Robot',
        category: 'Embedded',
        year: '2023',
        description: 'Autonomous lane-keeping car using OpenCV and Raspberry Pi 4. Achieved Top 3 at VR Siddhartha Hackathon demonstrating real-time embedded computer vision.',
        techStack: ['Python', 'OpenCV', 'Raspberry Pi 4', 'Embedded Systems'],
        githubUrl: 'https://github.com/Yash1026-hash',
        liveUrl: null,
        image: '/lane.png',
        featured: true
    },
    {
        id: 6,
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
        id: 7,
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
        id: 8,
        title: 'GHCI-25 Financial Classifier',
        category: 'AI/ML',
        year: '2025',
        description: 'DistilBERT-based classifier for financial transactions, developed for the GHCI-25 Hackathon to improve anomaly detection.',
        techStack: ['Python', 'PyTorch', 'DistilBERT', 'NLP'],
        githubUrl: 'https://github.com/Yash1026-hash/-GHCI-25-Hackathon',
        liveUrl: null,
        image: '/ghci.png',
        featured: false
    },
    {
        id: 9,
        title: 'KL-CONNECT',
        category: 'Mobile',
        year: '2025',
        description: 'A high-precision connectivity platform built with Dart and Flutter. Focuses on seamless integration and enterprise-grade observability.',
        techStack: ['Dart', 'Flutter', 'Firebase', 'State Management'],
        githubUrl: 'https://github.com/Yash1026-hash/KL-CONNECT',
        liveUrl: null,
        image: '/kl-connect.png',
        featured: false
    },
    {
        id: 10,
        title: 'RCID - Earthquake Detection',
        category: 'Research',
        year: '2025',
        description: 'Real-Time Co-Seismic Ionospheric Detector using GNSS observations for rapid earthquake hazard confirmation.',
        techStack: ['MATLAB', 'Signal Processing', 'GNSS', 'Geophysics'],
        githubUrl: null,
        liveUrl: null,
        image: '/rcid.png',
        featured: false,
        ongoing: true
    },
    {
        id: 11,
        title: 'Nitro — LinkedIn Automation',
        category: 'AI/ML',
        year: '2026',
        description: 'Fully automated LinkedIn content engine that generates one technical post per day using Gemini AI and publishes it via the LinkedIn Posts API — all orchestrated through GitHub Actions on a daily cron schedule.',
        techStack: ['Python', 'Gemini API', 'GitHub Actions', 'LinkedIn API', 'OAuth 2.0', 'Vercel'],
        githubUrl: 'https://github.com/Yash1026-hash/nitro',
        liveUrl: null,
        image: '/nitro.png',
        featured: true
    }
];

// Get unique categories from projects
export const categories = ['All', ...new Set(projects.map(p => p.category))];

// Get featured projects for home page
export const featuredProjects = projects.filter(p => p.featured);
