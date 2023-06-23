import React from 'react';
import Link from 'next/link';
import Routes from '@/src/routes/routes.types';
import socialLinksConfig from '@/src/constants/outSource';
import SocialIconsLinks from './SocialIconsLinks';
import Navigation from './Navigation';

const Footer = () => (
  <footer className="mt-auto w-full bg-white">
    <div className="mx-auto w-[1227px] py-6 max-lg:w-[1000px] max-md:w-full max-md:px-2 lg:py-8">
      <Navigation />
      <hr className="border-gray-200 my-6 sm:mx-auto lg:my-8" aria-hidden />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-wizard-grey sm:text-center">
          © 2023{' '}
          <Link
            href={Routes.ROOT}
            aria-label="Dev Wizard Home"
            className="hover:underline"
          >
            Dwizard.io™
          </Link>
          . All Rights Reserved.
        </span>
        <SocialIconsLinks links={socialLinksConfig} />
      </div>
    </div>
  </footer>
);

export default Footer;
