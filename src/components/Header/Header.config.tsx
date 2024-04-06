import React from "react";
import {
  FcHome,
  FcAbout,
  FcContacts,
  FcNews,
  FcRules,
  FcPrivacy,
  FcBarChart,
  FcViewDetails,
} from "react-icons/fc";
import { Routes, routesTitlesConfig } from "@/src/routes";
import { ButtonLinkVariants } from "../ButtonLink";

export type NavigationLinkConfigType = {
  href: Routes;
  title: string;
  linkVariant?: ButtonLinkVariants;
  icon?: JSX.Element;
  isSideNavOnly: boolean;
};

export const navigationLinksConfig: NavigationLinkConfigType[] = [
  {
    href: Routes.ROOT,
    title: routesTitlesConfig[Routes.ROOT],
    icon: <FcHome size={24} aria-hidden />,
    isSideNavOnly: true,
  },
  {
    href: Routes.NEWS,
    title: routesTitlesConfig[Routes.NEWS],
    icon: <FcNews size={24} aria-hidden />,
    isSideNavOnly: false,
  },
  {
    href: Routes.BLOG,
    title: routesTitlesConfig[Routes.BLOG],
    icon: <FcViewDetails size={24} aria-hidden />,
    isSideNavOnly: true,
  },
  {
    href: Routes.TOPICS,
    title: routesTitlesConfig[Routes.TOPICS],
    icon: <FcBarChart size={24} aria-hidden />,
    isSideNavOnly: true,
  },
  {
    href: Routes.OUR_STORY,
    title: routesTitlesConfig[Routes.OUR_STORY],
    icon: <FcAbout size={24} aria-hidden />,
    isSideNavOnly: false,
  },
  {
    href: Routes.CONTACT_US,
    title: routesTitlesConfig[Routes.CONTACT_US],
    icon: <FcContacts size={24} aria-hidden />,
    isSideNavOnly: false,
  },
  {
    href: Routes.TERMS_CONDITIONS,
    title: routesTitlesConfig[Routes.TERMS_CONDITIONS],
    icon: <FcRules size={24} aria-hidden />,
    isSideNavOnly: true,
  },
  {
    href: Routes.PRIVACY_POLICY,
    title: routesTitlesConfig[Routes.PRIVACY_POLICY],
    icon: <FcPrivacy size={24} aria-hidden />,
    isSideNavOnly: true,
  },
  {
    href: Routes.SIGN_IN,
    title: routesTitlesConfig[Routes.SIGN_IN],
    linkVariant: ButtonLinkVariants.PRIMARY,
    isSideNavOnly: false,
  },
  {
    href: Routes.SIGN_UP,
    title: routesTitlesConfig[Routes.SIGN_UP],
    linkVariant: ButtonLinkVariants.SECONDARY,
    isSideNavOnly: true,
  },
];
