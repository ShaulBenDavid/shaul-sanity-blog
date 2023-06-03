import Routes, { RoutesTitles } from '@/src/routes/routes.types';

export enum NavigationVariants {
  BUTTON = 'button',
  LINK = 'LINK',
}

export type NavigationLinksType = {
  href: Routes;
  title: RoutesTitles;
  variant: NavigationVariants;
}[];

const NavigationLinks: NavigationLinksType = [
  {
    href: Routes.ROOT,
    title: RoutesTitles.ROOT,
    variant: NavigationVariants.LINK,
  },
  {
    href: Routes.OUR_STORY,
    title: RoutesTitles.OUR_STORY,
    variant: NavigationVariants.LINK,
  },
  {
    href: Routes.CONTACT_US,
    title: RoutesTitles.CONTACT_US,
    variant: NavigationVariants.LINK,
  },
  {
    href: Routes.NEWS,
    title: RoutesTitles.NEWS,
    variant: NavigationVariants.LINK,
  },
  {
    href: Routes.SIGN_IN,
    title: RoutesTitles.SIGN_IN,
    variant: NavigationVariants.BUTTON,
  },
];

export default NavigationLinks;
