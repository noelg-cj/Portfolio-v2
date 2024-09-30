/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1157FF',
        white: '#E6E6FA',
        black: '#0A0A0A'
      },
      cursor: {
        figma: 'url(./src/assets/figma_cursor.svg)'
      },
      fontFamily: {
        'revelia': ['Revelia']
      }
    },
  },
  plugins: [],
}