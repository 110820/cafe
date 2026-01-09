/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: "#3b2f2f",
        cream: "#f5eee6",
        brown: "#8b5a2b",
      },
    },
  },
  plugins: [],
}

