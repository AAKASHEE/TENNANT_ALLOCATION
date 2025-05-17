/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}", // adjust based on your file structure
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        prussian: "#003153",
      },
    },
  },
  plugins: [],
};
