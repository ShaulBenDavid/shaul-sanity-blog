import { ButtonVariants } from './Button.types';

export const buttonVariantsStyleConfig: Record<ButtonVariants, string> = {
  [ButtonVariants.PRIMARY]:
    'bg-primary-900 shadow-button text-white hover:enabled:bg-[#6C078E]',
  [ButtonVariants.SECONDARY]:
    'shadow-button border-primary-900 bg-white border-[1px] hover:enabled:bg-wizard-white text-primary-900',
  [ButtonVariants.LINK]:
    'bg-transparent text-primary-900 hover:enabled:underline underline-offset-2',
};
