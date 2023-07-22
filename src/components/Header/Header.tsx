'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/src/components/Icons';
import { Routes } from '@/src/routes';
import { useGetUserRoutes } from '@/src/roles/hooks';
import PermissionGate, { Roles } from '@/src/roles';
import NavigationTabs from '../NavigationTabs';
import BurgerButton from './BurgerButton/BurgerButton';
import SideNavigation from '../SideNavigation';
import { getUserNavigationLinks } from './Header.utils';
import UserMenu from './UserMenu';

const Header = (): JSX.Element => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const userRoutes = useGetUserRoutes();
  const navigationLinks = getUserNavigationLinks(userRoutes);

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const openDrawer = () => {
    setShowDrawer(true);
  };

  return (
    <>
      <header className="fixed z-10 flex h-14 w-full items-center justify-center bg-white bg-opacity-[0.5] p-2 backdrop-blur-xl tb:px-8">
        <nav className="flex w-full max-w-[1227px] flex-row items-center">
          <BurgerButton onClick={openDrawer} />
          <Link href={Routes.ROOT} aria-label="Dev Wizard Home">
            <Logo />
          </Link>
          <NavigationTabs navLinks={navigationLinks} />
        </nav>
        <PermissionGate allowedRoles={[Roles.USER, Roles.ADMIN, Roles.WRITE]}>
          <UserMenu />
        </PermissionGate>
      </header>
      <SideNavigation
        onClick={closeDrawer}
        isOpen={showDrawer}
        navLinks={navigationLinks}
      />
    </>
  );
};

export default Header;
