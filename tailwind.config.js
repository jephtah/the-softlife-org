/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "720px",
      lg: "960px",
      "lg-max": { max: "960px" },
      xl: "1140px",
      "2xl": "1440px",
      "3xl": "1441px"
    },
    extend: {
      fontFamily: {
        sans: ["Syne", "sans-serif"],
        sansec: ["Poppins", "sans-serif"],
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        dark:'#283238',
        'black':'#191A1C',
        'white': '#ffffff',
        'main':{
          '100':'#E1F1FC',
          '400':'#1A4C6D',
          '500':'#143D59'
        },
        'sec':{
          '100':'#FFFCF3',
          '300':'#FCEBC2',
          '500':'#F4B41A'
        },
        'green':{
          '100':'#EDF8EB'
        }
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '5rem',
      },
    },
  },
  plugins: [],
}
