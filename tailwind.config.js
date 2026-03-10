/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0B',
        card: '#121214',
        accent: '#00FF41',
        primary: '#FFFFFF',
        secondary: '#A1A1AA',
        success: '#00F0FF', // Cyan/Green for metrics
      },
      fontFamily: {
        serif: ['"Orbitron"', 'sans-serif'],
        sans: ['"Share Tech Mono"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
