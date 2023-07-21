'use client';

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/src/components/Icons';
import { Routes } from '@/src/routes';
import { useGetUserRoutes } from '@/src/roles/hooks';
import { useLogout } from '@/src/api/auth/hooks';
import { AuthContext } from '@/src/context/auth';
import NavigationTabs from '../NavigationTabs';
import BurgerButton from './BurgerButton/BurgerButton';
import SideNavigation from '../SideNavigation';
import { getUserNavigationLinks } from './Header.utils';
import Avatar from '../Avatar';
import PermissionGate, { Roles } from '@/src/roles';

const Header = (): JSX.Element => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const { auth, handleLogout } = useContext(AuthContext);
  const userRoutes = useGetUserRoutes();
  const navigationLinks = getUserNavigationLinks(userRoutes);

  // !TEMP - need to be moved to user menu
  const { logout } = useLogout({ handleSuccess: handleLogout });

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
          {auth?.firstName ? (
            <button className="ml-5" onClick={() => logout()}>
              <Avatar name={`${auth.firstName} ${auth.lastName}`} />
            </button>
          ) : (
            <div className="h-8 w-8 flex-shrink-0 animate-pulse rounded-full bg-secondary-100 sm:ml-5" />
          )}
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
