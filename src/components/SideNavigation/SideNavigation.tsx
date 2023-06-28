'use client';

import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import {
  NavigationLinksConfigType,
  NavigationVariants,
} from '../Header/Header.config';
import Drawer from '../Drawer';
import SideNavTabsVariants from './SideNavigation.config';

interface SideNavigationProps {
  isOpen: boolean;
  onClick: () => void;
  navLinks: NavigationLinksConfigType;
}

const SideNavigation = ({ isOpen, onClick, navLinks }: SideNavigationProps) => {
  const activeSegment = useSelectedLayoutSegment() ?? '/';

  return (
    <Drawer onClose={onClick} isOpen={isOpen}>
      <ul
        className="flex flex-col p-2 [&>*:last-child]:mt-2"
        role="navigation"
        aria-label="Main"
        id="main-nav"
      >
        {navLinks.map(({ title, href, variant, icon }) => (
          <li
            key={href}
            className={`animate-[enterInSideTabs_0.6s_ease-in_forwards] opacity-0 `}
          >
            <Link
              href={href}
              onClick={onClick}
              aria-label={title}
              aria-current={activeSegment === href ? 'page' : undefined}
              className={`flex flex-row content-center gap-1  ${
                SideNavTabsVariants[variant]
              } ${
                activeSegment === href &&
                variant === NavigationVariants.LINK &&
                ' bg-primary bg-opacity-20 focus:bg-light-purple focus:bg-opacity-50'
              }`}
            >
              {icon && icon}
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default SideNavigation;
