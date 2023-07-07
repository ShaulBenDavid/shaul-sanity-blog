import { Routes, routesTitlesConfig } from '@/src/routes';
import { socialLinksConfig } from '@/src/constants/socials';
import { NavigationColumnLinksType } from './NavigationColumn/NavigationColumn';

const legalNavigationConfig: NavigationColumnLinksType = [
  {
    title: routesTitlesConfig[Routes.PRIVACY_POLICY],
    link: Routes.PRIVACY_POLICY,
  },
  {
    title: routesTitlesConfig[Routes.TERMS_CONDITIONS],
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
