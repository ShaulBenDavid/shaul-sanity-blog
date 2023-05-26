'use client';

import React from 'react';
import Link from 'next/link';
import ReactFocusLock from 'react-focus-lock';
import { useSelectedLayoutSegment } from 'next/navigation';
import NavigationLinks from '../../Header.config';

interface SideNavigationProps {
  onClick: () => void;
}

const SideNavigation = ({ onClick }: SideNavigationProps) => {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <ReactFocusLock>
      <nav
        className="absolute z-50 h-[100dvh] w-80 animate-[enterIn_0.2s_ease-in_forwards] bg-white pt-6 shadow-2xl ease-in"
        tabIndex={-1}
      >
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
      </nav>
    </ReactFocusLock>
  );
};

export default SideNavigation;
