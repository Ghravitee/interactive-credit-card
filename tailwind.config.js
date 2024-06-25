/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "White": "hsl(0, 0%, 100%)",
        "Light-Grayish-Violet": "hsl(270, 3%, 87%)",
        "Dark-Grayish-Violet": "hsl(279, 6%, 55%)",
        "Very-Dark-Violet": "hsl(278, 68%, 11%)",
      }
    },
  },
  plugins: [],
}

