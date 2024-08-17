/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1283px",
        "2xl": "1320px",
      },

      backgroundImage: {
        'home': "url('/images/home.jpg')",
        'h': "url('/images/home2.jpg')",
        'he': "url('/images/again.jpg')",
        'gallery': "url('/images/gallery.jpg')",
        'plan': "url('/images/plan.jpg')",

      },
    },
  },
  plugins: [],
};
