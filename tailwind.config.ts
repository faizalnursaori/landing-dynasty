// tailwind.config.ts
import type { Config } from "tailwindcss";
import tailwindcssMotion from "tailwindcss-motion";
import tailwindcssIntersect from "tailwindcss-intersect";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [tailwindcssMotion, tailwindcssIntersect],
} satisfies Config;
