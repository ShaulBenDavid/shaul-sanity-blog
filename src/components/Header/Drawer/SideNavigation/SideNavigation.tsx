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
        className="absolute z-50 h-[100dvh] w-80 bg-white shadow-2xl"
        tabIndex={-1}
      >
        <ul>
          {NavigationLinks.map(({ title, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={onClick}
                className={`text-gray-900 hover:bg-gray-100 group flex w-full items-center rounded-lg p-2 pl-11 capitalize transition duration-75 hover:bg-light-purple hover:bg-opacity-50  ${
                  activeSegment === href && ''
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
