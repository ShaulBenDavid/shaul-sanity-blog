'use client';

import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import {
  NavigationLinksType,
  NavigationVariants,
} from '../Header/Header.config';
import Drawer from '../Drawer';
import SideNavTabsVariants from './SideNavigation.config';

interface SideNavigationProps {
  isOpen: boolean;
  onClick: () => void;
  navLinks: NavigationLinksType;
}

const SideNavigation = ({ isOpen, onClick, navLinks }: SideNavigationProps) => {
  const activeSegment = useSelectedLayoutSegment() ?? '/';

  return (
    <Drawer onClose={onClick} isOpen={isOpen}>
      <ul className="flex flex-col gap-2 p-3">
        {navLinks.map(({ title, href, variant, icon }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={onClick}
              className={` flex flex-row content-center gap-1 ${
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
