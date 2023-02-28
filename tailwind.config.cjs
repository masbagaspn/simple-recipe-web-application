/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: '320px',
        tablets: '480px',
        laptop: '768px',
        desktop: '1024px'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
};