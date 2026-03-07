/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dr-purple': '#00c9e9',
        'dr-dark-purple': '#02adc7',
        'dr-light-purple': '#EDE9FE',
        'dr-accent': '#EB5633',
        'dr-text-dark': '#1A4255',
        gray: {
          DEFAULT: '#1A4255',
          50: '#1A4255',
          100: '#1A4255',
          200: '#1A4255',
          300: '#1A4255',
          400: '#1A4255',
          500: '#1A4255',
          600: '#1A4255',
          700: '#1A4255',
          800: '#1A4255',
          900: '#1A4255',
          950: '#1A4255',
        },
      },
      fontFamily: {
        'woodford': ['"Woodford Bourne"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
