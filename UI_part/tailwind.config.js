/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // or wherever your components are
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
