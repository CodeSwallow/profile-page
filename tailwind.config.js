/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{html,js}',
        './src/components/**/*.{html,js}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                "Josefin": ["Josefin Sans", "sans-serif"]
            },
            backgroundColor: {
                'aws': '#d97706',
                'react': '#61dafb',
                'nextjs': '#000000',
                'nodejs': '#68a063',
                'express': '#000000',
                'mongodb': '#4ea94b',
                'python': '#3776ab',
                'django': '#092e20',
                'postgresql': '#336791',
                'javascript': '#f0db4f',
                'typescript': '#007acc',
                'html': '#e34f26',
                'css': '#264de4',
                'tailwindcss': '#0f172a',
                'bootstrap': '#7952b3',
                'git': '#f05032',
                'github': '#181717',
                'netlify': '#00c7b7',
                'vercel': '#000000',
                'firebase': '#ffca28',
                'figma': '#f24e1e',
            }
        },
    },
    plugins: [],
}
