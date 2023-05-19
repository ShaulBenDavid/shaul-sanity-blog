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
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
