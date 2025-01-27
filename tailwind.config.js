/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        lg: '28px',
      },
      colors: {
        customBlue: '#718EBF',
        customGray: '#B1B1B1',
        customLightBlue: '#E7EDFF',
        customVibrantBlue: '#396AFF',
        customDarkGray: '#232323',
        customVibrantCyan: '#16DBCC',
        customVibrantYellow: '#FFBB38',
        customPurple:"#343C6A"
      },
    },
  },
  plugins: [],
};
