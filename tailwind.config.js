/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      colors: {
        primary: "#FFBC2F", // Your custom primary color "#2196F3"
        secondary: "#074C83", // Your custom secondary color
        Gray: "#90A2B2", // Your custom Gray color
        bg: "#F5F5F5", // Your custom Gray color
        dark_bg: "#1E293B",
        dar_bg_secondary: "#0F172A",
      },

      fontFamily: {
        custom: ["Epilogue", "sans-serif"], // 'Epilogue' is the custom font, 'sans-serif' is a fallback
        Poppins: ["Poppins", "sans-serif"], // 'Epilogue' is the custom font, 'sans-serif' is a fallback
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
