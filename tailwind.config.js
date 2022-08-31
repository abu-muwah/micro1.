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
    // fontSize: {
    //   '58px': '58px',
    // },
    extend: {
      height: {
        '0.5': '0.5px',
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '58px': '58px',
        '158px': '158px',
        '184px': '184px',
        '204px': '204px',
        '208px': '208px',
        '365px': '365px',
        '419px': '419px',
        '500px': '500px',
        '600px': '600px',    
      },
      width: {
        '0.5': '0.5px',
        '1px': '1px',
        '2px': '2px',
        '58px': '58px',
        '158px': '158px',
        '184px': '184px',
        '204px': '204px',
        '208px': '208px',
        '365px': '365px',
        '374px': '374px',
        '460px': '460px',
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
