import React from 'react';
import Link from 'next/link';
import Routes from '@/src/routes/routes.types';
import socialLinksConfig from '@/src/constants/outSource';
import Logo from '../../Icons';
import NavigationColumn from './NavigationColumn';

const Navigation = (): JSX.Element => (
  <nav
    className="md:flex md:justify-between"
    id="footer-nav"
    aria-label="Footer"
  >
    <div className="mb-6 md:mb-0">
      <Link
        href={Routes.ROOT}
        className="flex items-center"
        aria-label="Dev Wizard Home"
        passHref
      >
        <Logo aria-hidden />
      </Link>
    </div>
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
      <NavigationColumn
        name="Follow us"
        links={socialLinksConfig}
        isOutSourceLinks
      />
      <div>
        <h2 className="text-gray-900 mb-6 text-sm font-semibold uppercase">
          Follow us
        </h2>
        <ul className="text-gray-600 font-medium">
          <li className="mb-4">
            <a
              href="https://github.com/themesberg/flowbite"
              className="hover:underline "
            >
              Github
            </a>
          </li>
          <li>
            <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
              Discord
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-gray-900 mb-6 text-sm font-semibold uppercase">
          Legal
        </h2>
        <ul className="text-gray-600 font-medium">
          <li className="mb-4">
            <a
              href="https://github.com/ShaulBenDavid"
              className="hover:underline"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ShaulBenDavid"
              className="hover:underline"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
