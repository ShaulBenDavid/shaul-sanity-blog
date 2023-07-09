import { ButtonVariants } from './Button.types';

export const buttonVariantsStyleConfig: Record<ButtonVariants, string> = {
  [ButtonVariants.PRIMARY]:
    'bg-primary shadow-button text-white hover:enabled:bg-[#6C078E]',
  [ButtonVariants.SECONDARY]:
    'shadow-button border-primary bg-white border-[1px] hover:enabled:bg-wizard-white text-primary',
  [ButtonVariants.LINK]:
    'bg-transparent text-primary hover:enabled:underline underline-offset-2',
};
