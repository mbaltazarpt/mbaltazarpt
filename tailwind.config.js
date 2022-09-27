/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        abyssinica: ["Abyssinica SIL", "serif"],
        oswald: ["Oswald", "sans-serif"]
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
