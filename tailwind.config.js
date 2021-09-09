const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        "text-main": "var(--text-main)",
        transparent: "transparent",
        current: "currentColor",
        cyan: colors.cyan,
        teal: colors.teal,
        dark: colors.trueGray,
        red: colors.red,
        sky: colors.sky,
        amber: colors.amber
      }
    }
  },
  variants: {
    extend: {
      borderColor: ["responsive", "dark", "group-hover", "hover"],
      borderOpacity: ["responsive", "dark", "group-hover", "hover"],
      backgroundColor: ["responsive", "light", "dark"],
      fill: ["hover", "focus"],
      stroke: ["hover", "focus"]
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-prefers-color-scheme")(),
    plugin(function ({ addBase, addComponents, theme }) {
      const buttons = {
        ".btn": {
          padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
          borderRadius: theme("borderRadius.md"),
          fontWeight: theme("fontWeight.600")
        },
        ".btn-blue": {
          backgroundColor: theme("colors.blue.500"),
          color: theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.blue.600")
          }
        },
        ".primary": {
          backgroundColor: theme("colors.blue.500"),
          color: theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.blue.600")
          }
        },
        ".btn-red": {
          backgroundColor: theme("colors.red.500"),
          color: theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.red.600")
          }
        }
      }

      addComponents(buttons)
    }),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") }
      })
    })
  ]
}
