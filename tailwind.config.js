/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080c14',
        panel: '#101722',
        accent: '#72e4ce',
      },
    },
  },
  plugins: [],
}
