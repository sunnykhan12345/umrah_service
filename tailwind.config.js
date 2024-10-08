/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        custom: "0 0 10px 0 rgba(88, 96, 109, 0.14)", // Define your custom shadow here
      },
      backgroundImage: {
        conatct: "url('/images/cont.jpg')",
        flight: "url('/images/sky1.jfif')",
        home: "url('/images/home.png')",
        exective: "url('/images/images.jfif')",
        pac: "url('/images/k.jpg')",
        pack: "url('/images/24.jpg')",
        rabi: "url('/images/rabi.jpg')",
      },
      colors: {
        // 'blue-white-gradient': 'linear-gradient(to right, #e0f7fa, #ffffff)',
        "blue-white-gradient": "#000000",
        customBackground: "#f0f4f8",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
