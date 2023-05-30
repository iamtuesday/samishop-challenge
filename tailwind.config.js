/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ravn-white": "#F2F2F2",
        "ravn-black": "#121212",
        "ravn-dark": "#333333",
        "ravn-light": "#828282",
        "ravn-emphasis": "#EC5757",
      },
      screens: {
        phone: "414px",
        tablet: "768px",
        tabletlg: "960px",
        tabletxl: "1024px",
        laptop: "1200px",
        laptoplg: "1400px",
        desktop: "1700px",
      },
    },
  },
  plugins: [],
};
