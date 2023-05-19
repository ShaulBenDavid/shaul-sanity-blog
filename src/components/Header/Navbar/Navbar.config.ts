import Routes from './Navbar.types';

const NavLinkAnimation =
  'before:absolute before:top-7 before:w-0 before:h-1 before:bg-primary before:-translate-x-2/4 before:left-2/4 before:hover:w-3 before:transition-all';

export enum NavTabsVariants {
  BUTTON = 'w-[91px] h-[35px] bg-primary text-md items-center flex justify-center text-white rounded-[10px] shadow-dw hover:bg-[#6C078E] transition-all',
  LINK = `text-wizard-black relative text-md ${NavLinkAnimation}`,
}

export type NavigationLinksType = {
  href: Routes;
  title: string;
  variant: NavTabsVariants;
}[];

const NavigationLinks: NavigationLinksType = [
  {
    href: Routes.OUR_STORY,
    title: 'Our Story',
    variant: NavTabsVariants.LINK,
  },
  {
    href: Routes.CONTACT_US,
    title: 'Contact us',
    variant: NavTabsVariants.LINK,
  },
  {
    href: Routes.NEWS,
    title: 'News',
    variant: NavTabsVariants.LINK,
  },
  {
    href: Routes.SIGN_IN,
    title: 'Sign In',
    variant: NavTabsVariants.BUTTON,
  },
];

export default NavigationLinks;
