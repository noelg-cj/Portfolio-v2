/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0476D0',
        white: '#E6E6FA',
        black: '#0A0A0A'
      },
      cursor: {
        figma: 'url(./src/assets/figma_cursor.svg)'
      }
    },
  },
  plugins: [],
}