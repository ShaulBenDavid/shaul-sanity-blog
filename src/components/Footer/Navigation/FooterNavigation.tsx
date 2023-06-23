import React from 'react';
import Link from 'next/link';
import Routes from '@/src/routes/routes.types';
import socialLinksConfig from '@/src/constants/outSource';
import Logo from '../../Icons';
import NavigationColumn from './NavigationColumn';
import legalNavigationConfig from './FooterNavigation.config';

const FooterNavigation = (): JSX.Element => (
  <nav
    className="md:flex md:justify-between"
    id="footer-nav"
    aria-label="Footer"
  >
    <div className="mb-6 md:mb-0">
      <Link
        href={Routes.ROOT}
        className="flex w-fit items-center"
        aria-label="Dev Wizard Home"
        passHref
      >
        <Logo aria-hidden />
      </Link>
    </div>
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-6">
      <NavigationColumn
        name="Follow us"
        links={socialLinksConfig}
        isOutSourceLinks
      />
      <NavigationColumn name="legal" links={legalNavigationConfig} />
    </div>
  </nav>
);

export default FooterNavigation;
