'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '@/src/assets/Icons/Logo';
import Routes from '@/src/routes/routes.types';
import NavigationTabs from './NavigationTabs';
import BurgerButton from './BurgerButton/BurgerButton';
import SideNavigation from './SideNavigation';

const Header = (): JSX.Element => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const openDrawer = () => {
    setShowDrawer(true);
  };

  return (
    <>
      <header className="fixed z-10 flex h-14 w-full justify-center bg-white bg-opacity-[0.5] p-2 backdrop-blur-xl tb:px-8">
        <nav className="flex w-[1227px] flex-row items-center justify-between tb:w-full">
          <Link href={Routes.ROOT} aria-label="Dev Wizard Home">
            <Logo />
          </Link>
          <NavigationTabs />
          <BurgerButton onClick={openDrawer} />
        </nav>
      </header>
      <SideNavigation onClick={closeDrawer} isOpen={showDrawer} />
    </>
  );
};

export default Header;
