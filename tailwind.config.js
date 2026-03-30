/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Manrope', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d4f0ff',
          200: '#b0e5ff',
          300: '#79d2f9',
          400: '#36a6bc',
          500: '#1e86a1',
          600: '#116684',
          700: '#0d4f6c',
          800: '#123f57',
          900: '#0f3047',
          950: '#0b2032',
        },
        accent: {
          100: '#fff4cc',
          200: '#ffe58c',
          300: '#ffd658',
          400: '#fabc2f',
          500: '#f39b1f',
        },
      },
      boxShadow: {
        card: '0 10px 30px rgba(15, 48, 71, 0.08)',
        soft: '0 12px 24px rgba(17, 102, 132, 0.2)',
      },
    },
  },
  plugins: [],
}

