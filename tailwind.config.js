/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        dimgray: "#454264",
        gainsboro: "#d9d9d9",
        gray: "#2a2a2a",
        cornflowerblue: "#85b6ff",
        yellow: "#fff503",
      },
      spacing: {},
      fontFamily: {
        lacquer: "Lacquer",
        "long-cang": "'Long Cang'",
        "londrina-shadow": "'Londrina Shadow'",
        kokoro: "Kokoro",
        "josefin-sans": "'Josefin Sans'",
      },
      borderRadius: {
        "18xl": "37px",
        "8xs": "5px",
        "10xs": "3px",
      },
    },
    fontSize: {
      lg: "1rem",
      xl: "1.11rem",
      "28xl": "2.61rem",
      "6xl": "1.39rem",
      "127xl": "8.11rem",
      "2xs": "0.61rem",
      lgi: "1.06rem",
      "4xs": "0.5rem",
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
