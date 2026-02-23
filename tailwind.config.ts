import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        ardoise: "#1A1F2E",
        sauge: {
          DEFAULT: "#5B8C6F",
          deep: "#3D6B52",
        },
        terracotta: "#C17B5A",
        encre: "#2A2A35",
        graphite: "#555566",
        lin: "#E8E2D8",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
