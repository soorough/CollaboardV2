/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#2a2a2a",
        cornflowerblue: "#85b6ff",
        black: "#000",
        dimgray: "#454264",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        "josefin-sans": "'Josefin Sans'",
        lacquer: "Lacquer",
        "long-cang": "'Long Cang'",
        "londrina-shadow": "'Londrina Shadow'",
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "8xs": "5px",
        "18xl": "37px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      xl: "20px",
      "28xl": "47px",
      "6xl": "25px",
      "127xl": "146px",
      "2xs": "11px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
