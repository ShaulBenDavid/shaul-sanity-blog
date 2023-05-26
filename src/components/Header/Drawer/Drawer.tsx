'use client';

import React, { useEffect } from 'react';
import Backdrop from '../../Backdrop';
import SideNavigation from './SideNavigation';

interface DrawerProps {
  closeDrawer: () => void;
  showDrawer: boolean;
}

const Drawer = ({ closeDrawer, showDrawer }: DrawerProps) => {
  useEffect((): any => {
    document.body.style.overflow = 'hidden';
    // eslint-disable-next-line no-return-assign
    return () => (document.body.style.overflow = 'unset');
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Escape' || e.key === 'ArrowDown') {
      closeDrawer();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 h-[100dvh] w-screen ${
        showDrawer ? 'flex' : 'hidden'
      }`}
      role="presentation"
      onKeyDown={handleKeyPress}
      id="navigation-drawer"
    >
      <Backdrop onClick={closeDrawer} />
      <SideNavigation onClick={closeDrawer} />
    </div>
  );
};

export default Drawer;
