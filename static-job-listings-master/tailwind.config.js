/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'League Spartan',
    },
    extend: {
      minHeight: {
        screen: '100dvh',
      },
      fontSize: {
        base: '15px'
      },
      colors: {
        'desaturated-dark-cyan': 'hsl(180, 29%, 50%)',
        'light-grayish-cyan': 'hsl(180, 52%, 96%)',
        'dark-grayish-cyan': 'hsl(180, 8%, 52%)',
        'very-dark-grayish-cyan': 'hsl(180, 14%, 20%)',
      },
      screens: {
        'desktop': '1440px'
      },
      boxShadow: {
        primary: '0px 15px 20px -5px rgba(13,113,130,0.15)'
      }
    },
  },
  plugins: [],
}
