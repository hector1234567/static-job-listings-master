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
    colors: {
      'light': '#EFFAFA',
      'primary': '#63BABA',
      'primary-dark': '#5CA5A5'
    },
    extend: {
      minHeight: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
}
