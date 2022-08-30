/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            height:{
                '60': '60vh',
                '70': '70vh',
                '75': '75vh',
                '80': '80vh'
            }
        },
    },
    plugins: [],
});
