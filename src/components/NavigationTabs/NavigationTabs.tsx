'use client';

import React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import { NavigationLinksConfigType } from '../Header/Header.config';
import NavTab from './NavTab';

interface NavigationTabsProps {
  navLinks: NavigationLinksConfigType[];
}

const NavigationTabs = ({ navLinks }: NavigationTabsProps): JSX.Element => {
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
          <NavTab
            key={href}
            href={href}
            variant={variant}
            title={title}
            isActive={activeSegment === href}
          />
        )
      )}
    </ul>
  );
};

export default NavigationTabs;
