"use client";

import React, { useContext, useState } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import ReactFocusLock from "react-focus-lock";
import { Routes } from "@/src/routes";
import { PermissionGate, Roles } from "@/src/roles";
import { AuthContext } from "@/src/context/auth";
import { useGetInfo, useLogout } from "@/src/api/auth/hooks";
import theme from "@/src/styles/tailwind.theme";
import { Avatar } from "../../../Avatar";
import { Dropdown } from "../../../Dropdown";
import { AppLink } from "../../../AppLink";

export const UserMenu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { handleLogout } = useContext(AuthContext);
  const { logout } = useLogout({ handleSuccess: handleLogout });
  const { info } = useGetInfo();

  return (
    <div className="ml-5 max-tb:ml-auto">
      {info ? (
        <Dropdown
          setState={setIsOpen}
          isOpen={isOpen}
          trigger={<Avatar name={`${info.firstName} ${info.lastName}`} />}
          label="user menu"
          className="right-0 w-56"
        >
          <ReactFocusLock>
            <ul role="menu" className="flex flex-col gap-1">
              <li role="menuitem">
                <AppLink href={`/@${info.username}`}>
                  <PermissionGate allowedRoles={[Roles.ADMIN]}>
                    <MdAdminPanelSettings
                      size={24}
                      aria-hidden
                      fill={theme.secondary[950]}
                    />
                  </PermissionGate>
                  <div className="flex flex-col">
                    <span>
                      {info.firstName} {info.lastName}
                    </span>
                    <small className="text-sm opacity-70">
                      @{info.username}
                    </small>
                  </div>
                </AppLink>
              </li>
              <hr className="border-secondary-950 opacity-50" />
              <li role="menuitem">
                <AppLink href={Routes.READING_LIST}>Reading list</AppLink>
              </li>
              <PermissionGate allowedRoles={[Roles.ADMIN, Roles.WRITE]}>
                <li role="menuitem">
                  <AppLink href={Routes.STUDIO}>Studio</AppLink>
                </li>
              </PermissionGate>
              <li role="menuitem">
                <AppLink href={Routes.SETTINGS}>Settings</AppLink>
              </li>
              <li role="menuitem">
                <AppLink onClick={logout}>Logout</AppLink>
              </li>
            </ul>
          </ReactFocusLock>
        </Dropdown>
      ) : (
        <div className="h-8 w-8 flex-shrink-0 animate-pulse rounded-full bg-secondary-100" />
      )}
    </div>
  );
};
