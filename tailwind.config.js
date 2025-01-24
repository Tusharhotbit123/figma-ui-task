/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        lg: '28px',
      },
      colors:{
        customBlue: '#718EBF'
      }
    },
  },
  plugins: [],
};
