/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      iPhoneSE: { raw: "(max-height: 700px), (min-width: 350px)" },

      largeIPhone: {
        raw: "(min-height: 800px) and (max-height: 900px) and (min-width: 350px) and (max-width: 450px)",
      },

      mobile_md: "400px",

      xs: "500px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
