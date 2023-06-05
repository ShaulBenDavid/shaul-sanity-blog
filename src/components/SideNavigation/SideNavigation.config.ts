import { NavigationVariants } from '../Header/Header.config';

const SideNavTabsVariants = {
  [NavigationVariants.BUTTON]:
    'w-full h-[35px] bg-primary text-md items-center flex justify-center text-white rounded-[10px] shadow-dw hover:bg-[#6C078E] transition-all capitalize',
  [NavigationVariants.LINK]: `text-gray-900 group flex w-full items-center rounded-lg p-2 capitalize transition duration-75  focus:bg-gray focus:bg-opacity-20`,
};

export default SideNavTabsVariants;
