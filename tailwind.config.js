/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // LaUnit Creatives Brand Colors - Professional Photography & Development
        primary: {
          50: '#fef7ee',
          100: '#fdecd3',
          200: '#fad4a5',
          300: '#f7b56d',
          400: '#f5a637', // Main brand color
          500: '#f28a1c',
          600: '#e36c12',
          700: '#bc5011',
          800: '#964016',
          900: '#783515',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7', // Secondary accent
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // Semantic colors
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',

        // Theme-aware color aliases (these will be set via CSS variables)
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        body: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        muted: 'var(--color-text-muted)',
        'border-color': 'var(--color-border)',
        'theme-accent': 'var(--color-accent)',
        'theme-success': 'var(--color-success)',
        'theme-error': 'var(--color-error)',

        // New theme-specific accent colors
        'light-accent': '#B38D4F', // Muted Gold/Bronze for light mode
        'dark-accent': '#FFD700',  // Bright Gold/Amber for dark mode
      },

      fontFamily: {
        // Design System Typography
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        // Semantic font aliases
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },

      keyframes: {
        ping: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%': { transform: 'scale(1.5)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
      },
      animation: {
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      
      maxWidth: {
        xl: '96rem',
        lg: '30rem',
      },
      minWidth: {
        '128': '32rem',
      },
      screens: {
        xs: "300px",
        sm: "375px",
        sml: "500px",
        md: "640px",
        mdl: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      
    },
  },

  plugins: [require("tailwind-scrollbar")],
}
