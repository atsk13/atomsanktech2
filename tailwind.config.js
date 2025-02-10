/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1a237e', // Bleu foncé pour votre marque
      },
    },
  },
  plugins: [],
};