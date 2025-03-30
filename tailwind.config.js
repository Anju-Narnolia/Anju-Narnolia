/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideUp: "slideUp 0.8s ease-out",
        glow: "glow 1s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px rgba(234, 179, 8, 0.5)" },
          "100%": { boxShadow: "0 0 50px rgba(234, 179, 8, 15)" },
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
