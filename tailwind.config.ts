import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,tsx,ts}",
    "./page.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#25466A",
        secondary: "#25466A",
        h1Color: "#00ADEE",
        h6Color: "#757575",
        highlight: "#FFDE83",
        blureColor: "#687986",
        packageColor: "#e5f6fc",
        cyanColor:"#e5f7fd",
      },
      fontFamily: {
        Sans: ["Sofia Sans", "sans-serif"],
        decorativeSerif: ["Didot", "Bodoni", "serif"],
        Kalnia: ["kalnia", "sans-serif"],
        custom: ['Roboto'],
      },
      fontSize: {
        midFont: "1.25rem",
        BigFont: "2.5rem",
      },
      boxShadow: {
        borderShadow: "0px 4px 20px -1px #0000000F",
        cardShadow: "0px 4px 4px 0px #0000000F",
      },
      backdropBlur: {
        custom: "20px",
      },
    },
    screens: {
      custom: "700px",
      custom2: "900px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },

  plugins: [require("@tailwindcss/forms"), require("tailwindcss-rtl")],
};
export default config;
