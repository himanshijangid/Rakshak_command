/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  // 🔥 IMPORTANT FOR AOS (GitHub Pages FIX)
  safelist: [
    "aos-init",
    "aos-animate",
  ],

  theme: {
    extend: {
      keyframes: {
        slideRL: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        slideRL: "slideRL 22s linear infinite",
      },
    },
  },

  plugins: [],
};
