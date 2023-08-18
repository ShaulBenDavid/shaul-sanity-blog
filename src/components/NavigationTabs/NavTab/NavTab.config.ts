import { NavigationVariants } from '../../Header/Header.config';

const NavLinkAnimation =
  'before:absolute before:rounded-[10px] before:top-7 before:w-0 before:h-1 before:bg-primary-900 before:-translate-x-2/4 before:left-2/4 before:hover:w-3 before:transition-all';

export const navTabStyleConfig = {
  [NavigationVariants.BUTTON]:
    'w-[91px] h-[35px] bg-primary-900 text-base items-center flex justify-center text-white rounded-[6px] shadow-dw hover:bg-[#6C078E] transition-all',
  [NavigationVariants.SECONDARY_BUTTON]: '',
  [NavigationVariants.LINK]: `text-wizard-black relative text-base ${NavLinkAnimation}`,
};
