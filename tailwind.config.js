/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        mutedForeground: "rgb(var(--mutedForeground) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accentSecondary: "rgb(var(--accentSecondary) / <alpha-value>)",
        accentTertiary: "rgb(var(--accentTertiary) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        destructive: "rgb(var(--destructive) / <alpha-value>)",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
        display: ['Orbitron', '"Share Tech Mono"', 'monospace'],
        label: ['"Share Tech Mono"', 'monospace'],
      },
      boxShadow: {
        'neon': '0 0 5px rgb(var(--accent)), 0 0 10px rgb(var(--accent) / 0.25)',
        'neon-sm': '0 0 3px rgb(var(--accent)), 0 0 6px rgb(var(--accent) / 0.18)',
        'neon-lg': '0 0 10px rgb(var(--accent)), 0 0 20px rgb(var(--accent) / 0.37), 0 0 40px rgb(var(--accent) / 0.18)',
        'neon-secondary': '0 0 5px rgb(var(--accentSecondary)), 0 0 20px rgb(var(--accentSecondary) / 0.37)',
        'neon-tertiary': '0 0 5px rgb(var(--accentTertiary)), 0 0 20px rgb(var(--accentTertiary) / 0.37)',
      },
      dropShadow: {
        'glitch': '0 0 10px rgb(var(--accent) / 0.5)',
        'glow': '0 0 20px rgb(var(--accent) / 0.3)',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'glitch': 'glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
        'rgb-shift': 'rgbShift 0.3s steps(2) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '60%': { transform: 'translate(-1px, -1px)' },
          '80%': { transform: 'translate(1px, 1px)' },
        },
        rgbShift: {
          '0%, 100%': { textShadow: '-2px 0 #ff00ff, 2px 0 #00d4ff' },
          '50%': { textShadow: '2px 0 #ff00ff, -2px 0 #00d4ff' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        }
      }
    },
  },
  plugins: [],
}
