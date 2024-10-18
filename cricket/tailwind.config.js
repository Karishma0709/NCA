/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
              primary: '#F3F4F6',
              secondary:'#A2E2FF',
            
      }
    },
  },
  plugins: [],
}