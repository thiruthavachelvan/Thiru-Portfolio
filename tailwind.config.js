/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        museum: {
          dark: '#0c0a09',
          darker: '#080706',
          card: 'rgba(20, 16, 12, 0.92)',
          glass: 'rgba(201, 168, 76, 0.05)',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c97a',
          bright: '#f0d060',
          dark: '#8b6914',
          muted: '#7a6332',
        },
        cream: {
          DEFAULT: '#f0ead8',
          muted: '#c8bca8',
          dim: '#8a7d6b',
          dark: '#4a3f32',
        },
        wood: {
          dark: '#2a1f14',
          medium: '#3d2b1f',
          light: '#5c4033',
        },
        crimson: {
          DEFAULT: '#8b1a1a',
          light: '#a83030',
          dark: '#5c1010',
        },
        // Keep brand colors for backward compat internally
        brand: {
          orange: '#c9a84c',
          pink: '#a78bfa',
          purple: '#7c3aed',
          blue: '#6366f1',
          cyan: '#38bdf8',
          green: '#10b981',
        },
        dark: {
          bg: '#0c0a09',
          card: 'rgba(20, 16, 12, 0.92)',
          glass: 'rgba(201, 168, 76, 0.05)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      animation: {
        blob: 'blob 14s infinite',
        'blob-slow': 'blob 22s infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 5s ease-in-out 2.5s infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'marquee': 'marquee 28s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'curtain-lift': 'curtainLift 1.8s cubic-bezier(0.76, 0, 0.24, 1) forwards',
        'flicker': 'flicker 4s ease-in-out infinite',
        'spotlight-scan': 'spotlightScan 8s ease-in-out infinite',
        'gold-pulse': 'goldPulse 3s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -60px) scale(1.15)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        curtainLift: {
          '0%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'top' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.85' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.9' },
          '97%': { opacity: '1' },
        },
        spotlightScan: {
          '0%, 100%': { backgroundPosition: '20% 50%' },
          '50%': { backgroundPosition: '80% 50%' },
        },
        goldPulse: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(201,168,76,0.3), 0 0 20px rgba(201,168,76,0.1)' },
          '50%': { boxShadow: '0 0 20px rgba(201,168,76,0.6), 0 0 40px rgba(201,168,76,0.2)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
        '400%': '400%',
      },
      boxShadow: {
        'gold': '0 0 20px rgba(201, 168, 76, 0.3), 0 0 60px rgba(201, 168, 76, 0.1)',
        'gold-strong': '0 0 30px rgba(201, 168, 76, 0.5), 0 0 80px rgba(201, 168, 76, 0.15)',
        'museum': '0 8px 40px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)',
        'inner-gold': 'inset 0 1px 0 rgba(201,168,76,0.2)',
      },
    },
  },
  plugins: [],
}
