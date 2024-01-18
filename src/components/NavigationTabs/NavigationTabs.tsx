"use client";

import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import type { NavigationLinkConfigType } from "../Header/Header.config";
import { NavTab } from "./NavTab";
import { ButtonLink } from "../ButtonLink";

interface NavigationTabsProps {
  navLinks: NavigationLinkConfigType[];
}

export const NavigationTabs = ({
  navLinks,
}: NavigationTabsProps): JSX.Element => {
  const activeSegment = useSelectedLayoutSegment() ?? "/";
  const filteredLinks = navLinks.filter(({ isSideNavOnly }) => !isSideNavOnly);

  return (
    <ul
      className="ml-auto flex list-none flex-row items-center gap-5 max-tb:hidden"
      role="navigation"
      aria-label="Main"
      id="main-nav"
    >
      {filteredLinks.map(({ title, href, linkVariant }) =>
        linkVariant ? (
          <li key={href}>
            <ButtonLink
              href={href}
              variant={linkVariant}
              ariaLabel={title}
              isAriaCurrent={activeSegment === href.substring(1)}
            >
              {title}
            </ButtonLink>
          </li>
        ) : (
          <NavTab
            key={href}
            href={href}
            title={title}
            isActive={activeSegment === href.substring(1)}
          />
        ),
      )}
    </ul>
  );
};
