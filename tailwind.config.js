/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mb: '375px',
      sm: '568px',
      tb: '768px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
    },
    colors: {
      primary: '#810CA8',
      'light-primary': '#C147E9',
      'light-purple': '#E5B8F4',
      secondary: '#2D033B',
      'wizard-black': '#1D0325',
      'wizard-white': '#FAF2FD',
      red: '#FF224A',
      green: '#0FE83F',
      orange: '#EC5D0D',
      white: '#ffffff',
      black: '#222222',
      gray: '#808080',
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      fontSize: {
        'h1-dynamic': 'clamp(2rem, 5vw, 4rem)',
        'p-dynamic': 'clamp(1.125rem, 2vw, 1.5rem)',
      },
      boxShadow: {
        dw: '2px 2px 4px rgba(45, 3, 59, 0.62)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        enterIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { translate: 'translateX(100%)' },
        },
        enterInSideTabs: {
          '0%': { transform: 'translateY(15px)', opacity: 0 },
          '100%': { translate: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
