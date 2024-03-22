/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkblue': '#04042c',
      },
    },
    fontFamily: {
      'signika-negative': ['Signika Negative', 'sans-serif'],
    },
  },
  plugins: [],
}