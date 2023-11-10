import { create } from "@storybook/theming/create";
import Logo from "../src/assets/dwlogo.svg";

export default create({
  base: "light",
  brandTitle: "Dev Wizard Blog",
  brandUrl: "https://dwizard.io",
  brandImage: Logo,
  brandTarget: "_self",
  //
  colorPrimary: "#810CA8",
  colorSecondary: "#E5B8F4",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appBorderColor: "#E5B8F4",
  appBorderRadius: 4,

  // Text colors
  textColor: "#1D0325",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#A46CB7",
  barSelectedColor: "#E5B8F4",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#1D0325",
  inputTextColor: "#1D0325",
  inputBorderRadius: 2,
});
