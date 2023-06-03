'use client';

import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import NavTabsVariants from './NavigationTabs.config';
import NavigationLinks, { NavigationVariants } from '../Header.config';
import Routes from '@/src/routes/routes.types';

const NavigationTabs = () => {
  const activeSegment = useSelectedLayoutSegment() ?? '/';

  return (
    <ul className="flex list-none flex-row items-center gap-5 max-tb:hidden">
      {NavigationLinks.map(({ title, href, variant }) =>
        href === Routes.ROOT ? null : (
          <li
            key={href}
            className={`cursor-pointer capitalize ${NavTabsVariants[variant]} ${
              variant === NavigationVariants.LINK &&
              activeSegment === href &&
              'before:w-full before:hover:w-full'
            }`}
          >
            <Link href={href}>{title}</Link>
          </li>
        )
      )}
    </ul>
  );
};

export default NavigationTabs;
