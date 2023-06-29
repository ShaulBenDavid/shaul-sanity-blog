import { ButtonVariants } from './Button.types';

export const buttonVariantsConfig: Record<ButtonVariants, string> = {
  [ButtonVariants.PRIMARY]:
    'bg-primary shadow-button text-white hover:enabled:bg-[#6C078E] disabled:opacity-60',
  [ButtonVariants.SECONDARY]: 'shadow-button',
  [ButtonVariants.LINK]: 's',
};
