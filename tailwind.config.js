/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: '',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        yellowPrimary: "#F4B733",
        colorPrimary: "#2cb766",
        hoverPrimary: "#2cb766f0",
        colorSecondary: "#F4B733",
      }
    },
  },
  plugins: [],
}