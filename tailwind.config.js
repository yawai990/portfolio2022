/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'bg-primary': "#182747",
        'dark-bg': '#0e1114'
      },
      textColor: {
        'text-primary': "#874C62",
        'text-sidebg': '#A7D2CB'
      },
      backgroundImage: {
        'hero-bg': "url('')"
      },
      fontFamily: {
        'sans': ['Merriweather',]
      },
      dropShadow: {
        'light': '0 0 1px #ffdad0',
        '3xl': '0 35px 15px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}