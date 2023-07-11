'use client';

import React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import { NavigationLinksConfigType } from '../Header/Header.config';
import Drawer from '../Drawer';
import SideNavTab from './SideNavTab';

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
        className="flex animate-[enterInSideTabs_0.6s_ease-in_forwards] flex-col p-2 opacity-0 [&>*:last-child]:mt-2"
        role="navigation"
        aria-label="Main"
        id="main-nav"
      >
        {navLinks.map(({ title, href, variant, icon }) => (
          <SideNavTab
            key={href}
            href={href}
            onClick={onClick}
            title={title}
            variant={variant}
            icon={icon}
            isActive={activeSegment === href}
          />
        ))}
      </ul>
    </Drawer>
  );
};

export default SideNavigation;
