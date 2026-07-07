/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F4F1E9",
          dark: "#E9E4D6",
          warm: "#FBF9F3",
        },
        ink: {
          DEFAULT: "#0C0C0D",
          soft: "#26262B",
          mute: "#6B6B73",
        },
        lavender: {
          light: "#ECE3F8",
          soft: "#D3C2EE",
          DEFAULT: "#A98ED9",
          deep: "#6B53A8",
          dark: "#463275",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        hard: "6px 6px 0 0 #0C0C0D",
        "hard-sm": "4px 4px 0 0 #0C0C0D",
        "hard-lg": "10px 10px 0 0 #0C0C0D",
        "hard-lavender": "6px 6px 0 0 #6B53A8",
      },
      backgroundImage: {
        spectrum:
          "linear-gradient(100deg, #6B53A8 0%, #A98ED9 48%, #ECE3F8 100%)",
        "spectrum-soft":
          "linear-gradient(115deg, #ECE3F8 0%, #C9B6E8 100%)",
        "spectrum-radial":
          "radial-gradient(900px 500px at 100% 0%, #E3D6F5 0%, transparent 55%), radial-gradient(800px 500px at 0% 100%, #D9C9F0 0%, transparent 55%)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        blink: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0" } },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        "marquee-fast": "marquee 16s linear infinite",
        "marquee-rev": "marquee-rev 26s linear infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};
