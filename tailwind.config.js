/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./.storybook/**/*.{ts,tsx,js,mjs,cjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}