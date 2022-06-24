/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors:{
        bluex:{
          100: '#2356D9',
        },
        orangex:{
           100: '#FFBF26'
          
        }
      }
    },
  },
  plugins: [],
}
