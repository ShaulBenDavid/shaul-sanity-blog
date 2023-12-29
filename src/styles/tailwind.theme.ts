import resolveConfig from "tailwindcss/resolveConfig";
import myConfig from "../../tailwind.config.js";

type Theme = {
  theme: {
    colors: {
      primary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      "light-primary": string;
      "light-purple": string;
      "bg-grey": string;
      "dw-grey": string;
      secondary: {
        950: string;
      };
      "wizard-black": string;
      "wizard-white": string;
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
