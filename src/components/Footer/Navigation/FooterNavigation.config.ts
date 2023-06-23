import Routes, { RoutesTitles } from '@/src/routes/routes.types';
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

export default legalNavigationConfig;
