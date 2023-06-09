// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

// ! TEMP until tailwind will be release a new version
delete colors.lightBlue;
delete colors.warmGray;
delete colors.trueGray;
delete colors.coolGray;
delete colors.blueGray;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
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
      ...colors,
      primary: '#810CA8',
      'light-primary': '#C147E9',
      'light-purple': '#E5B8F4',
      secondary: '#2D033B',
      'wizard-grey': '#736278',
      'wizard-black': '#1D0325',
      'wizard-white': '#FAF2FD',
      orange: '#EC5D0D',
      white: '#ffffff',
      black: '#222222',
      gray: '#808080',
    },
    extend: {
      height: {
        dvh: '100dvh',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      fontSize: {
        'h1-dynamic': 'clamp(2rem, 5vw, 4rem)',
        'p-dynamic': 'clamp(1.125rem, 2vw, 1.5rem)',
      },
      boxShadow: {
        dw: '2px 2px 4px rgba(45, 3, 59, 0.62)',
        button: '2px 2px 4px 0px rgba(45, 3, 59, 0.62)',
        container: ' 0px 4px 22px 3px rgba(29, 3, 37, 0.25)',
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
