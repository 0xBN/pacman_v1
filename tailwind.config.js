/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        game: ['VT323', 'monospace'],
      },
      gridTemplateColumns: {
        20: 'repeat(20, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
