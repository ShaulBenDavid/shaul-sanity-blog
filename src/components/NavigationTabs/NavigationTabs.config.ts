import { NavigationVariants } from '../Header/Header.config';

const NavLinkAnimation =
  'before:absolute before:rounded-[10px] before:top-7 before:w-0 before:h-1 before:bg-primary before:-translate-x-2/4 before:left-2/4 before:hover:w-3 before:transition-all';

const NavTabsVariants = {
  [NavigationVariants.BUTTON]:
    'w-[91px] h-[35px] bg-primary text-md items-center flex justify-center text-white rounded-[10px] shadow-dw hover:bg-[#6C078E] transition-all',
  [NavigationVariants.LINK]: `text-wizard-black relative text-md ${NavLinkAnimation}`,
};

export default NavTabsVariants;
