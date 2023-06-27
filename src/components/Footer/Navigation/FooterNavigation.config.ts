import { Routes, RoutesTitles } from '@/src/routes';
import { socialLinksConfig } from '@/src/constants/socials';
import { NavigationColumnLinksType } from './NavigationColumn/NavigationColumn';

const legalNavigationConfig: NavigationColumnLinksType = [
  {
    title: RoutesTitles.PRIVACY_POLICY,
    link: Routes.PRIVACY_POLICY,
  },
  {
    title: RoutesTitles.TERMS_CONDITIONS,
    link: Routes.TERMS_CONDITIONS,
  },
];

export const footerNavigationConfig = [
  {
    name: 'follow us',
    links: socialLinksConfig,
    isOutSourceLinks: true,
  },
  {
    name: 'terms',
    links: legalNavigationConfig,
    isOutSourceLinks: false,
  },
];
