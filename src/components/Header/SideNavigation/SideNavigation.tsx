'use client';

import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import NavigationLinks from '../Header.config';
import Drawer from '../../Drawer';

interface SideNavigationProps {
  onClick: () => void;
  isOpen: boolean;
}

const SideNavigation = ({ onClick, isOpen }: SideNavigationProps) => {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <Drawer onClose={onClick} isOpen={isOpen}>
      <ul>
        {NavigationLinks.map(({ title, href }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={onClick}
              className={`text-gray-900 group flex w-full items-center rounded-lg p-2 pl-11 capitalize transition duration-75  focus:bg-gray focus:bg-opacity-20   ${
                activeSegment === href &&
                'bg-light-purple bg-opacity-50 focus:bg-light-purple focus:bg-opacity-50'
              }`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default SideNavigation;
