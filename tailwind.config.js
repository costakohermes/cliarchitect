/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ea580c',
        'primary-hover': '#f97316',
        bg: '#fff7ed',
        text: '#7c2d12',
      },
    },
  },
  plugins: [],
}