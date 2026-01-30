/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'sumi-black': '#0f0f11',
                'ink-gray': '#1a1a1c',
                'paper-white': '#e8e8e3',
                'vermilion': '#FF4500',
                'marigold': '#FFD700',
                'muted-text': '#888890',
                'card-bg': '#151517',
            },
            fontFamily: {
                'en': ['Inter', 'sans-serif'],
                'jp': ['Noto Sans JP', 'sans-serif'],
                'hi': ['Noto Sans Devanagari', 'sans-serif'],
                'display': ['Cinzel', 'serif'],
            },
            animation: {
                'pulse-dot': 'pulse 2s infinite',
                'rotate': 'rotate 10s linear infinite',
                'float': 'float 20s infinite ease-in-out',
            },
            keyframes: {
                rotate: {
                    'from': { transform: 'rotate(0deg)' },
                    'to': { transform: 'rotate(360deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(50px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-30px, 30px) scale(0.9)' },
                },
            },
        },
    },
    plugins: [],
}
