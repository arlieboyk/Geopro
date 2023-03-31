/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    color: {},
    extend: {
      colors: {
        myBlue: "#00bbfd",
        buttonColor: "#0088cc",
        headingFont: "#212529",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
