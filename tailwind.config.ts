import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        rosewater: "hsl(var(--rosewater) / <alpha-value>)",
        flamingo: "hsl(var(--flamingo) / <alpha-value>)",
        pink: "hsl(var(--pink) / <alpha-value>)",
        mauve: "hsl(var(--mauve) / <alpha-value>)",
        red: "hsl(var(--red) / <alpha-value>)",
        maroon: "hsl(var(--maroon) / <alpha-value>)",
        peach: "hsl(var(--peach) / <alpha-value>)",
        yellow: "hsl(var(--yellow) / <alpha-value>)",
        green: "hsl(var(--green) / <alpha-value>)",
        teal: "hsl(var(--teal) / <alpha-value>)",
        sky: "hsl(var(--sky) / <alpha-value>)",
        sapphire: "hsl(var(--sapphire) / <alpha-value>)",
        blue: "hsl(var(--blue) / <alpha-value>)",
        lavender: "hsl(var(--lavender) / <alpha-value>)",
        text: "hsl(var(--text) / <alpha-value>)",
        subtext1: "hsl(var(--subtext1) / <alpha-value>)",
        subtext0: "hsl(var(--subtext0) / <alpha-value>)",
        overlay2: "hsl(var(--overlay2) / <alpha-value>)",
        overlay1: "hsl(var(--overlay1) / <alpha-value>)",
        overlay0: "hsl(var(--overlay0) / <alpha-value>)",
        surface2: "hsl(var(--surface2) / <alpha-value>)",
        surface1: "hsl(var(--surface1) / <alpha-value>)",
        surface0: "hsl(var(--surface0) / <alpha-value>)",
        base: "hsl(var(--base) / <alpha-value>)",
        mantle: "hsl(var(--mantle) / <alpha-value>)",
        crust: "hsl(var(--crust) / <alpha-value>)",
      },
    },
    fontFamily: {
      primary: "var(--font-jetbrains-mono)",
    },
  },
};
export default config;
