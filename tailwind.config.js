/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Raleway', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        accent: '#60A5FA',
        base: '#080808',
        surface: '#101010',
        border: '#1c1c1c',
        muted: '#4a4a4a',
        subtle: '#777777',
      },
    },
  },
  plugins: [],
}
