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
        background: {
          light: '#FFFFFF',
          dark: '#0B0F19',
        },
        surface: {
          light: '#FFFFFF',
          'light-subtle': '#F8FAFC',
          dark: '#111827',
          'dark-subtle': '#0F172A',
        },
        border: {
          light: '#E2E8F0',
          dark: '#1E293B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
