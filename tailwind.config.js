/* eslint @typescript-eslint/no-var-requires: "off" */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  //mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class", // false or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        mono: ["Menlo", ...defaultTheme.fontFamily.mono],
        source: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        "ubuntu-mono": ["Ubuntu Mono", ...defaultTheme.fontFamily.mono],
        system: defaultTheme.fontFamily.sans,
      },
      colors: {
        // background: "#121212",
        // purp: "#a65fec",
        // custom: {
        //   secondary: "rgba(25, 27, 31, 0.6)",
        //   "secondary-notrans": "rgb(25, 27, 31)",
        //   tertiary: "#25272C",
        //   background: "#1F2128",
        //   lines: "#1D1E23",
        // },
        gray: colors.gray,
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        "light-blue": colors.lightBlue,
        lime: colors.lime,
        rose: colors.rose,
        emerald: colors.emerald,
      },
      animation: {
        pulse: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          },
        },
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["focus-visible"],
      ringColor: ["focus-visible"],
      ringOffsetWidth: ["focus-visible"],
      ringOffsetColor: ["focus-visible"],
      borderStyle: ["hover"],
      backgroundOpacity: ["hover"],
      fontWeight: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
