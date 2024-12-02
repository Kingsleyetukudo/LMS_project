/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', "sans-serif"], // Primary font
        outfit: ['"Outfit"', "sans-serif"], // Secondary font
      },
      colors: {
        bgGray: "#F0F0F0",
        myBlue: "#4a90e2",
        myGreen: "#7ed321",
        myWhite: "#ffffff",
      },

      width: {
        100: "100px",
        50: "50px",
      },

      screens: {
        "max-sm": { max: "640px" },
      },
    },
  },
  plugins: [],
};
