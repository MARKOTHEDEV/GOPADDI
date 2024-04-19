
// const { withTV } = require('tailwind-variants/transformer');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:'#0D6EFD',
        lightBlue:'#000031',
        grayBlue:'#E7F0FF',
        white:'#FFFFFF',
        gray:'#F0F2F5',
        blackthickBlue:'#344054',
        grayblue2:'#647995',
        

      }
    },
  },
  plugins: [
    

  ],
}
