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
            }
        },
    },
    plugins: [],
}
