/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Documented Bao Bei palette (from brand audit) — cream / seal-red / sage
        cream: {
          DEFAULT: '#f1efe4',
          200: '#e7e4d3',
        },
        seal: {
          DEFAULT: '#b5241d',
          dark: '#8f1a15',
        },
        sage: {
          DEFAULT: '#97b88e',
          dark: '#7ea073',
          darker: '#6b8c61',
        },
        ink: {
          DEFAULT: '#2b2926',
          soft: '#3d3b38',
          muted: '#6b6862',
        },
      },
      fontFamily: {
        // Cormorant Garamond — elegant high-end brasserie display serif
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // Jost ≈ Brandon Grotesque (geometric sans) for eyebrows, nav & labels
        display: ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        cn: ['"Noto Serif SC"', 'serif'],
      },
      letterSpacing: {
        brand: '0.25em',
        wide: '0.15em',
      },
      maxWidth: {
        content: '72rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
