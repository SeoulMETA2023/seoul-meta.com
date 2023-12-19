/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "mobile": "380px",
      "tablet": "640px",
      "laptop": "1024px",
      "desktop": "1280px"
    },
    fontFamily: {
      "noto-sans": ["Noto Sans KR", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"]
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
      white: "#FFFFFF",
    }
  },
  plugins: [],
}

