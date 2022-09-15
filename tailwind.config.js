/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode:'class',
    theme: {
      extend: {
        backgroundColor:{
          'bg-primary':"#A7D2CB"
        },
        textColor:{
          'text-primary':"#874C62",
          'text-sidebg':'#A7D2CB'
        },
        backgroundImage:{
          'hero-bg':"url('https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')"
        },
        fontFamily:{
          'sans':['Merriweather',]
        }
      },
    },
    plugins: [],
  }