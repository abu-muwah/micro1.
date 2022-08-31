/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: { 
      center: true,
      screens: {
        'xl': '1120px',
      },
     },
    extend: {
      // backgroundImage: {
      //   '01': "url('/img/35.png')",
      //   '02': "url('/img/36.png')",
      //   '03': "url('/img/37.png')",
      //   '04': "url('/img/38.png')",
      // },
      height: {
        '0.5': '0.5px',
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '500px': '500px',
        '600px': '600px',
        
      },
      width: {
        '0.5': '0.5px',
        '1px': '1px',
        '2px': '2px',
        '374px': '374px',
        '500px': '500px',
        '265px': '265px',

      },
      padding: {
        '13': '13px',
      }
    },
  },
  plugins: [],
}
