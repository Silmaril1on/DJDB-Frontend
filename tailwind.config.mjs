/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        small: "5p 5px 10px 10px",
      },
      colors: {
        yellow: "#FFD700",
        blue: "#0a0f24",
        gray: "#1c1f2e",
        pink: "#ff3d81",
        green: "#4affd7",
        purple: "#9b59ff",
        lightgray: "#d1d1d1",
        white: "#ffffff",
      },
      fontFamily: {
        secondary: ["Montserrat Alternates", "sans-serif"],
        primary: ["rationale", "sans-serif"],
      },
      boxShadow: {
        sm: "0 0 10px 1px",
        lg: "0 0 20px 2px",
        xl: "0 0 40px 4px",
      },
    },
  },
  plugins: [],
};
