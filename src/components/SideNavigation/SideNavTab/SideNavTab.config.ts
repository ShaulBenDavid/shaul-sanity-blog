import { NavigationVariants } from '../../Header/Header.config';

export const sideNavTabStyleConfig = {
  [NavigationVariants.BUTTON]:
    'w-full h-[35px] bg-primary-900 text-base justify-center text-white shadow-dw hover:bg-[#6C078E] transition-all ',
  [NavigationVariants.SECONDARY_BUTTON]:
    'w-full h-[35px] text-base shadow-button border-primary-900 justify-center bg-white border-[1px] hover:bg-wizard-white text-primary-900 transition-all ',
  [NavigationVariants.LINK]: `text-gray-900 group flex w-full p-2  focus:bg-gray focus:bg-opacity-20`,
};
