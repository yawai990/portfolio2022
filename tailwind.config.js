/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode:'class',
    theme: {
      extend: {
        backgroundColor:{
          'bg-primary':"#A7D2CB",
          'dark-bg':'rgb(33,31,31)'
        },
        textColor:{
          'text-primary':"#874C62",
          'text-sidebg':'#A7D2CB'
        },
        backgroundImage:{
          'hero-bg':"url('')"
        },
        fontFamily:{
          'sans':['Merriweather',]
        }
      },
    },
    plugins: [],
  }