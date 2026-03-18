/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        "bg-base": "#0A0F2C",
        "bg-alt": "#0E1435",
        "bg-hero": "#2539E7",
        "footer-bg": "#070F1F",

        // Surfaces (cream — v2.1)
        "surface-1": "#F5F0E8",
        "surface-2": "#FFFDF8",
        "surface-3": "#EDE8DD",

        // Primary
        primary: "#2539E7",
        "primary-hover": "#3348F5",

        // Decorative (from PPT)
        "accent-yellow": "#F5C518",
        "accent-cyan": "#00E5FF",

        // Text on cream surfaces
        "text-primary": "#0A0F2C",
        "text-secondary": "#3D4260",
        "text-muted": "#6B7094",

        // Text on dark/blue surfaces
        "text-on-dark": "#FFFFFF",
        "text-on-dark-secondary": "#C8CCE0",
        "text-on-dark-muted": "#8088A8",

        // Agent accent colors (UNCHANGED)
        "arc-blue": "#3B82F6",
        "arc-cyan": "#0891B2",
        "arc-emerald": "#059669",
        "arc-violet": "#7C3AED",
        "arc-amber": "#D97706",

        // Semantic
        success: "#059669",
        warning: "#D97706",
        danger: "#EF4444",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "1400px",
        prose: "720px",
      },
      borderRadius: {
        card: "16px",
        button: "10px",
        pill: "50px",
        input: "8px",
      },
      spacing: {
        section: "120px",
        "section-md": "80px",
        "section-sm": "64px",
      },
      animation: {
        "marquee-left": "marquee-left 40s linear infinite",
        "marquee-right": "marquee-right 40s linear infinite",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-32": "32px 32px",
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [],
};
