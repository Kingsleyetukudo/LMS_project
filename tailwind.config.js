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
        "max-sm": { max: "768px" },
      },
      lineHeight: {
        130: "150px",
      },

      gridTemplateColumns: {
        "2col": "250px 1fr",
        "1col": "100px 1fr",
      },

      transitionProperty: {
        "grid-cols": "grid-template-columns",
      },

      gridTemplateAreas: {
        layout: ["Sidebar header", "sidebar main", "footer footer"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Optional Tailwind plugins
    function ({ addUtilities }) {
      addUtilities({
        ".grid-layout": {
          display: "grid",
          "grid-template-areas": `
            "sidebar header"
            "sidebar main"
            "sidebar footer"
          `,
        },
        ".header-area": {
          "grid-area": "header",
        },
        ".sidebar-area": {
          "grid-area": "sidebar",
        },
        ".main-area": {
          "grid-area": "main",
        },
        ".footer-area": {
          "grid-area": "footer",
        },
      });
    },
  ],
};
