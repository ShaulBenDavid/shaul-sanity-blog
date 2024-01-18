import { ButtonLinkVariants } from "./ButtonLink.types";

export const linkStyleConfig = {
  [ButtonLinkVariants.PRIMARY]:
    "bg-primary-900 text-white shadow-dw hover:bg-[#6C078E] transition-all ",
  [ButtonLinkVariants.SECONDARY]:
    "shadow-button border-primary-900 bg-white border-[1px] hover:bg-wizard-white text-primary-900 transition-all ",
  [ButtonLinkVariants.LINK]: `bg-transparent text-primary-900 hover:underline underline-offset-2`,
};
