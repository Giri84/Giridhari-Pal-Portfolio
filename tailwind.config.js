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
        ink: "#0A0E12",
        panel: "#121821",
        panel2: "#0E1319",
        line: "#212B34",
        line2: "#2A3540",
        paper: "#ECE7DD",
        muted: "#8B94A1",
        amber: {
          DEFAULT: "#FFB454",
          dim: "#B8863E",
          glow: "#FFD8A0",
        },
        cyan: {
          DEFAULT: "#5CC9E8",
          dim: "#3E8FA6",
        },
        ok: "#7CD992",
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
        drift: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        drift: "drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
