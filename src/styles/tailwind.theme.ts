import resolveConfig from 'tailwindcss/resolveConfig';
import myConfig from '../../tailwind.config.js';

type Theme = {
  theme: {
    colors: {
      primary: string;
      'light-primary': string;
      'light-purple': string;
      secondary: {
        950: string;
      };
      'wizard-black': string;
      'wizard-white': string;
      orange: string;
      white: string;
      black: string;
      gray: string;
    };
  };
};

const config = resolveConfig(myConfig);

const theme = (config as Theme).theme.colors;

export default theme;
