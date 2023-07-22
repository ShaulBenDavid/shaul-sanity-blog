'use client';

import React, { useContext, useState } from 'react';
import { AuthContext } from '@/src/context/auth';
import { useLogout } from '@/src/api/auth/hooks';
import { Routes } from '@/src/routes';
import Avatar from '../../Avatar';
import Dropdown from '../../Dropdown';
import AppLink from '../../AppLink';

const UserMenu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { auth, handleLogout } = useContext(AuthContext);
  const { logout } = useLogout({ handleSuccess: handleLogout });

  return (
    <div className="relative">
      {auth ? (
        <>
          <button
            className="ml-5 hover:drop-shadow-lg"
            onClick={() => setIsOpen(true)}
            type="button"
            aria-expanded={isOpen}
            aria-controls="username-desc"
            aria-label="User menu"
          >
            <Avatar name={`${auth.firstName} ${auth.lastName}`} />
          </button>
          <Dropdown
            onClose={() => setIsOpen(false)}
            isOpen={isOpen}
            id="usermenu-desc"
            className="right-0 top-[115%] w-56 flex-col"
          >
            <ul role="menu" className="flex flex-col gap-1">
              <li role="menuitem">
                <AppLink href={`/@${auth.username}`}>
                  <div className="flex flex-col">
                    <span>
                      {auth.firstName} {auth.lastName}
                    </span>
                    <small className="text-sm opacity-70">
                      @{auth.username}
                    </small>
                  </div>
                </AppLink>
              </li>
              <hr className="border-secondary-950 opacity-50" />
              <li role="menuitem">
                <AppLink href={Routes.READING_LIST}>Reading list</AppLink>
              </li>
              <li role="menuitem">
                <AppLink href={Routes.SETTINGS}>Settings</AppLink>
              </li>
              <li role="menuitem">
                <AppLink onClick={logout}>Logout</AppLink>
              </li>
            </ul>
          </Dropdown>
        </>
      ) : (
        <div className="h-8 w-8 flex-shrink-0 animate-pulse rounded-full bg-secondary-100 sm:ml-5" />
      )}
    </div>
  );
};

export default UserMenu;
