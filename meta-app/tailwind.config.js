/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "noto-sans": ["Noto Sans KR", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"]
    },
    extend: {
      screens: {
        xs: "380px"
      },
      gridTemplateRows: {
          12: "repeat(12, minmax(0, 1fr))"
        },
      spacing: {
        140: "35rem",
        150: "37.5rem",
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
        light: "#D3D3D3",
        dark: "#A9A9A9",
        dim: "#696969"
      },
      white: "#FFFFFF",
      blue: {
        "sky": "#0066DD"
      }
    }
  },
  plugins: [],
}

