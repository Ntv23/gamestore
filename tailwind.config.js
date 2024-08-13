/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit','sans-serif'],
        Orbitron: ['Orbitron','sans-serif']
      },
    },
  },
  plugins: [],
}
