import Link from 'next/link';
import React from 'react';
import Logo from '../Icons';
import Routes from '@/src/routes/routes.types';
import socialLinksConfig from '@/src/constants/outSource';
import SocialIconsLinks from './SocialIconsLinks/SocialIconsLinks';

const Footer = () => (
  <footer className="mt-auto w-full bg-white">
    <div className="mx-auto w-[1227px] py-6 max-lg:w-[1000px] max-md:w-full max-md:px-2 lg:py-8">
      <div className="md:flex md:justify-between">
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
          <div>
            <h2 className="text-gray-900 mb-6 text-sm font-semibold uppercase text-secondary">
              Resources
            </h2>
            <ul className="text-gray-600 font-medium text-wizard-black">
              <li className="mb-4">
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
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
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
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
      </div>
      <hr className="border-gray-200 my-6 sm:mx-auto lg:my-8" aria-hidden />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-gray-500 text-sm sm:text-center">
          © 2023{' '}
          <Link href={Routes.ROOT} className="hover:underline">
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
