'use client';

import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import NavigationLinks, { NavTabsVariants } from './NavigationTabs.config';

const NavigationTabs = () => {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <ul className="flex list-none flex-row items-center gap-5">
      {NavigationLinks.map(({ title, href, variant }) => (
        <li
          key={href}
          className={`cursor-pointer ${variant} ${
            variant === NavTabsVariants.LINK &&
            activeSegment === href &&
            'before:w-full before:hover:w-full'
          }`}
        >
          <Link href={href}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationTabs;
