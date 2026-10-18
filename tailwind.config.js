/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        panel: "rgb(var(--c-panel) / <alpha-value>)",
        panel2: "rgb(var(--c-panel2) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        line2: "rgb(var(--c-line2) / <alpha-value>)",
        paper: "rgb(var(--c-paper) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        amber: {
          DEFAULT: "rgb(var(--c-accent) / <alpha-value>)",
          dim: "rgb(var(--c-accent-dim) / <alpha-value>)",
          glow: "rgb(var(--c-accent-glow) / <alpha-value>)",
        },
        cyan: {
          DEFAULT: "rgb(var(--c-blue) / <alpha-value>)",
          dim: "rgb(var(--c-blue-dim) / <alpha-value>)",
        },
        ok: "rgb(var(--c-ok) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #1a222b 1px, transparent 1px), linear-gradient(to bottom, #1a222b 1px, transparent 1px)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        drift: "drift 6s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite reverse",
      },
    },
  },
  plugins: [],
};
