/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        neon:" 0 0 5px theme('colors.blue.200'), 0 0 20px theme('colors.blue.700') ",
        cardShadow: " 0 0 5px theme('colors.blue.200'), 0 0 20px theme('colors.blue.300') "
      }
    },
  },
  plugins: [],
}

