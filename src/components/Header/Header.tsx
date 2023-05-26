import React from 'react';
import Link from 'next/link';
import Logo from '@/src/assets/Icons/Logo';
import Routes from './NavigationTabs/NavigationTabs.types';
import NavigationTabs from './NavigationTabs';

const Header = (): JSX.Element => (
  <header className="fixed z-10 flex h-14 w-full justify-center bg-white bg-opacity-[0.5] px-8 backdrop-blur-xl">
    <nav className="flex w-[1227px] flex-row items-center justify-between">
      <Link href={Routes.ROOT}>
        <Logo />
      </Link>
      <NavigationTabs />
    </nav>
  </header>
);

export default Header;
