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
          'dark-bg':'#0e1114'
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