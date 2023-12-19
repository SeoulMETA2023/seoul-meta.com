/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "tablet": "640px",
      "laptop": "1024px",
      "desktop": "1280px"
    },
    extend: {},
    colors: {
      black: {
        DEFAULT: "#000000",
        gear: "#1E1E1E"
      },
      gray: {
        light: "#A7A7AC",
        dim: "#696969"
      },
    }
  },
  plugins: [],
}

