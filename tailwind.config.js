/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bg-blue': '#4A5E6C',
        'purple-input': '#6F87C5',
        'white-theme': '#E0F4FF',
        'menu-light': '#D1EBFA',
        'menu-dark': '#172132',
        'aqua-light': '#6E97AE'
      }
    },
  },
  plugins: [],
}
