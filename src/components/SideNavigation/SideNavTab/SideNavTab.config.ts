import { NavigationVariants } from '../../Header/Header.config';

export const sideNavTabStyleConfig = {
  [NavigationVariants.BUTTON]:
    'w-full h-[35px] bg-primary-900 text-md items-center flex justify-center text-white rounded-[6px] shadow-dw hover:bg-[#6C078E] transition-all capitalize',
  [NavigationVariants.LINK]: `text-gray-900 group flex w-full items-center rounded-lg p-2 capitalize focus:bg-gray focus:bg-opacity-20`,
};
