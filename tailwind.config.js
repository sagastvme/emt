/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
    "./assets/*.vue",
      "./assets/**/*.vue",
    "./assets/**/**/*.vue"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },

    extend: {},
  },
  plugins: [],
}