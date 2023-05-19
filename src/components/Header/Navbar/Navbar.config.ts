import Routes from './Navbar.types';

export type NavigationLinksType = {
  href: Routes;
  title: string;
}[];

const NavigationLinks: NavigationLinksType = [
  {
    href: Routes.OUR_STORY,
    title: 'Our Story',
  },
  {
    href: Routes.CONTACT_US,
    title: 'Contact us',
  },
  {
    href: Routes.NEWS,
    title: 'News',
  },
  {
    href: Routes.SIGN_IN,
    title: 'Sign In',
  },
];

export default NavigationLinks;
