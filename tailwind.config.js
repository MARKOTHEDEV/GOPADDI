
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
        lightBlue:'#344054',
        grayBlue:'#E7F0FF',
        white:'#FFFFFF',
        gray:'#F0F2F5',
        blackthickBlue:'#000031',
        grayblue2:'#647995',
        cream:'#FEF4E6',
        brown:'#7A4504'
        

      }
    },
  },
  plugins: [
    

  ],
}
