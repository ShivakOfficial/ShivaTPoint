/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2196f3',
        secondary: '#1976d2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}