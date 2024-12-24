import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,js,ts,jsx,tsx}" // Make sure this is included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;