'use client';

import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import NavTabsVariants from './NavigationTabs.config';
import {
  NavigationLinksType,
  NavigationVariants,
} from '../Header/Header.config';

interface NavigationTabsProps {
  navLinks: NavigationLinksType;
}

const NavigationTabs = ({ navLinks }: NavigationTabsProps) => {
  const activeSegment = useSelectedLayoutSegment() ?? '/';

  return (
    <ul
      className="ml-auto flex list-none flex-row items-center gap-5 max-tb:hidden"
      role="navigation"
      aria-label="Main"
      id="main-nav"
    >
      {navLinks.map(({ title, href, variant, isSideNavOnly }) =>
        isSideNavOnly ? null : (
          <li
            key={href}
            className={`cursor-pointer capitalize ${NavTabsVariants[variant]} ${
              variant === NavigationVariants.LINK &&
              activeSegment === href &&
              'before:w-full before:hover:w-full'
            }`}
          >
            <Link
              href={href}
              aria-label={title}
              aria-current={activeSegment === href ? 'page' : undefined}
            >
              {title}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default NavigationTabs;
