/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["montserrat", "padauk", "sans-serif"],
    },
    extend: {
      fontFamily: {
        heading: ["poppins", "sans-serif"],
      }
    },
  },
  plugins: ["flowbite/plugin"],
}
