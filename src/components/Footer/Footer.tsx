import React from 'react';
import Link from 'next/link';
import { Routes } from '@/src/routes';
import { socialLinksConfig } from '@/src/constants/socials';
import SocialIconsLinks from './SocialIconsLinks';
import Navigation from './Navigation';

const Footer = () => (
  <footer className="w-full bg-white">
    <div className="mx-auto w-[1227px] py-6 max-lg:w-[1000px] max-md:w-full max-md:px-2">
      <Navigation />
      <hr className="my-6 border-wizard-grey sm:mx-auto lg:my-8" aria-hidden />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-wizard-grey sm:text-center">
          © 2023{' '}
          <Link
            href={Routes.ROOT}
            aria-label="Home"
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
