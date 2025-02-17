import type { Config } from "tailwindcss";

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
      borderRadius: {
        "btn": "15px",
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      fontSize: {
        h1: "64px",
        h2: "48px",
        h3: "32px",
        h4: "24px",
        h5: "18px",
        h6: "16px",
        p: "14px",
        button: "12px"
      },
      lineHeight: {
        h1: "70.4px",
        h2: "52.8px",
        h3: "35.2px",
        h4: "36px",
        h5: "27px",
        h6: "24px",
        p: "21px",
        button: "18px"
      },
      letterSpacing: {
        h1: "-0.02em",
        h2: "-0.01em",
        h5: "0.04em",
        h6: "0.02em",
        p: "0.02em",
        button: "0.02em"
      }
    },
  },
  plugins: [],
} satisfies Config;
