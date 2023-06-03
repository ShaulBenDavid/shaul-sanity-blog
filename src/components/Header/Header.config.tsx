import React from 'react';
import { FcHome, FcAbout, FcContacts, FcNews } from 'react-icons/fc';
import Routes, { RoutesTitles } from '@/src/routes/routes.types';

export enum NavigationVariants {
  BUTTON = 'button',
  LINK = 'LINK',
}

export type NavigationLinksType = {
  href: Routes;
  title: RoutesTitles;
  variant: NavigationVariants;
  icon?: JSX.Element;
}[];

const NavigationLinks: NavigationLinksType = [
  {
    href: Routes.ROOT,
    title: RoutesTitles.ROOT,
    variant: NavigationVariants.LINK,
    icon: <FcHome size={24} />,
  },
  {
    href: Routes.NEWS,
    title: RoutesTitles.NEWS,
    variant: NavigationVariants.LINK,
    icon: <FcNews size={24} />,
  },
  {
    href: Routes.OUR_STORY,
    title: RoutesTitles.OUR_STORY,
    variant: NavigationVariants.LINK,
    icon: <FcAbout size={24} />,
  },
  {
    href: Routes.CONTACT_US,
    title: RoutesTitles.CONTACT_US,
    variant: NavigationVariants.LINK,
    icon: <FcContacts size={24} />,
  },
  {
    href: Routes.SIGN_IN,
    title: RoutesTitles.SIGN_IN,
    variant: NavigationVariants.BUTTON,
  },
];

export default NavigationLinks;