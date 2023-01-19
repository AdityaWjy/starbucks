/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "link-active": "#42b983",
        "color-green": "#1e3932",
        "color-red": "#8b323e",
        "color-greenBlend": "#3d7170",
      },
    },
  },
  plugins: [],
}
