/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0B0F19',
        surface: {
          50: '#1E293B',
          100: '#151D2F',
          200: '#101726',
          300: '#0B0F19',
        },
        border: {
          subtle: '#1E293B',
          DEFAULT: '#334155',
          accent: '#3B82F6',
        },
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        cyan: {
          DEFAULT: '#06B6D4',
          glow: '#22D3EE',
        },
        emerald: {
          verified: '#10B981',
        },
        amber: {
          pending: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
