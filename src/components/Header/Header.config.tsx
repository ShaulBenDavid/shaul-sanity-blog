import React from "react";
import {
  FcHome,
  FcAbout,
  FcContacts,
  FcNews,
  FcRules,
  FcPrivacy,
} from "react-icons/fc";
import { Routes, routesTitlesConfig } from "@/src/routes";

export enum NavigationVariants {
  BUTTON = "button",
  LINK = "LINK",
  SECONDARY_BUTTON = "secondary-button",
}

export type NavigationLinksConfigType = {
  href: Routes;
  title: string;
  variant: NavigationVariants;
  icon?: JSX.Element;
  isSideNavOnly: boolean;
};

export const navigationLinksConfig: NavigationLinksConfigType[] = [
  {
    href: Routes.ROOT,
    title: routesTitlesConfig[Routes.ROOT],
    variant: NavigationVariants.LINK,
    icon: <FcHome size={24} aria-hidden />,
    isSideNavOnly: true,
  },
  {
    href: Routes.NEWS,
    title: routesTitlesConfig[Routes.NEWS],
    variant: NavigationVariants.LINK,
    icon: <FcNews size={24} aria-hidden />,
    isSideNavOnly: false,
  },
  {
    href: Routes.OUR_STORY,
    title: routesTitlesConfig[Routes.OUR_STORY],
    variant: NavigationVariants.LINK,
    icon: <FcAbout size={24} aria-hidden />,
    isSideNavOnly: false,
  },
  {
    href: Routes.CONTACT_US,
    title: routesTitlesConfig[Routes.CONTACT_US],
    variant: NavigationVariants.LINK,
    icon: <FcContacts size={24} aria-hidden />,
    isSideNavOnly: false,
  },
  {
    href: Routes.TERMS_CONDITIONS,
    title: routesTitlesConfig[Routes.TERMS_CONDITIONS],
    variant: NavigationVariants.LINK,
    icon: <FcRules size={24} aria-hidden />,
    isSideNavOnly: true,
  },
  {
    href: Routes.PRIVACY_POLICY,
    title: routesTitlesConfig[Routes.PRIVACY_POLICY],
    variant: NavigationVariants.LINK,
    icon: <FcPrivacy size={24} aria-hidden />,
    isSideNavOnly: true,
  },
  {
    href: Routes.SIGN_IN,
    title: routesTitlesConfig[Routes.SIGN_IN],
    variant: NavigationVariants.BUTTON,
    isSideNavOnly: false,
  },
  {
    href: Routes.SIGN_UP,
    title: routesTitlesConfig[Routes.SIGN_UP],
    variant: NavigationVariants.SECONDARY_BUTTON,
    isSideNavOnly: true,
  },
];
