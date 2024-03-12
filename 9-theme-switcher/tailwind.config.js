/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // The value "class" means that Tailwind will generate dark mode styles based on the presence of the dark class in your HTML markup
  theme: {
    extend: {},
  },
  plugins: [],
}

