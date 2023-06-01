'use client';

import React, { useEffect } from 'react';
import ReactFocusLock from 'react-focus-lock';
import Backdrop from '../Backdrop';

type DrawerProps = React.PropsWithChildren<{
  onClose: () => void;
  isOpen: boolean;
}>;

const Drawer = ({ onClose, isOpen, children }: DrawerProps) => {
  useEffect((): any => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    // eslint-disable-next-line no-return-assign
    return () => (document.body.style.overflow = 'unset');
  }, [isOpen]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Escape' || e.key === 'ArrowDown') {
      onClose();
    }
  };

  return (
    <div
      data-testid="drawer"
      className={`fixed inset-0 z-50 h-[100dvh] w-screen ${
        isOpen ? 'flex' : 'hidden'
      }`}
      role="presentation"
      onKeyDown={handleKeyPress}
      aria-hidden={!isOpen}
      id="navigation-drawer"
    >
      <Backdrop onClick={onClose} />
      <ReactFocusLock>
        <nav
          className="absolute z-50 h-[100dvh] w-80 animate-[enterIn_0.2s_ease-in_forwards] bg-white pt-6 shadow-2xl ease-in"
          tabIndex={-1}
        >
          {children}
        </nav>
      </ReactFocusLock>
    </div>
  );
};

export default Drawer;
