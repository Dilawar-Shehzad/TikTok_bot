/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
      },
    },
    fontFamily: {
      DMSansBold: ['DMSans Bold', 'sans-serif'],
      abelRegular: ['Abel Regular', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}