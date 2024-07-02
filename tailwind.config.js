/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        screens: {
        'sm-md': {'min': '897px'}, 
      },
      width: {
        '60pr': '60%',
        '50pr': '50%',
        '48pr': '48%',
      },
      height: {
        '1px': '1px',
      },
      colors: {
        'black': '#121111',
        'light-black': '#18191D',
        'grey': '#a4a7b1',
        'border_color': '#333538',
        'blue': '#12c2e9',
        'dark_grey': '#757575'
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #008FC3, #7ed5ea)',
      },
      fontSize: {
        '65px': '65px',
        '40px': '40px',
        '17px': '17px',
        '15px':"15px"
      },
      lineHeight: {
        '91lh': '91px',
        '70lh': '70px',
        '64lh': '64px',
        '56lh': '56px',
        '50lh': '50px',
        '40lh': '40px',
        '35lh': '35px',
      }, 
      letterSpacing: {
        '7tr': '7px'
      },
      borderRadius: {
        '10br': '10px'
      },
      padding:{
        '3px':'3px'
      }
    },
  },
  plugins: [],
}
