import { ButtonVariants } from './Button.types';

export const buttonVariantsConfig: Record<ButtonVariants, string> = {
  [ButtonVariants.PRIMARY]:
    'bg-primary shadow-button text-white hover:enabled:bg-[#6C078E] disabled:opacity-60',
  [ButtonVariants.SECONDARY]:
    'shadow-button border-l-primary bg-white border-[1px] hover:enabled:bg-wizard-white text-primary disabled:opacity-60',
  [ButtonVariants.LINK]:
    'bg-transparent text-primary hover:enabled:underline underline-offset-2 disabled:opacity-60',
};
