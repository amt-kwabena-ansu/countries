/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  darkMode:'class',
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      boxShadow: {
        'around': '0 0px 3px  rgba(151, 151, 151, 0.5)',
        'around-dark': '0 0px 3px  rgba(0, 0, 0, 0.3)',
        'buttom': '0 2px 2px  rgba(0, 0, 0, 0.1)',
      }
    },
    colors: {
      'blue':'#2B3844',
      'darkBlue':'#202C36',
      'white':'#FFFFFF',
      'darkText':'#111517',
      'lowWhite':'#F2F2F2',
    },
    screens: {
      'mobile': '640px',
      // => @media (min-width: 640px) { ... }
      
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'pc': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily:{
      'Nunito': ['Nunito Sans', 'sans-serif']
    }
  },
  plugins: [],
}
