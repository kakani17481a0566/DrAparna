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
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
