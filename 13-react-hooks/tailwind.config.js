/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem', // Add custom font size '10xl'
        '11xl': '11rem', // Add custom font size '11xl'
        // Add more custom font sizes as needed
      },
    },
  },
  plugins: [],
}

