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
    extend: {
      spacing: {
        145: "36.25rem",
        160: "40rem"
      },
      animation: {
        "gear-spin": "gear-spin 50s linear infinite"
      },
      keyframes: {
        "gear-spin": {
          "100%": {
            transform: "translateY(50%) rotate(360deg)"
          }
        }
      }
    },
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

