import React from "react";
import Link from "next/link";
import { Routes } from "@/src/routes";
import { NavigationColumn } from "./NavigationColumn";
import { footerNavigationConfig } from "./FooterNavigation.config";
import { Logo } from "../../Icons";

export const FooterNavigation = (): JSX.Element => (
  <nav
    className="md:flex md:justify-between"
    id="footer-nav"
    aria-label="Footer"
  >
    <div className="mb-6 md:mb-0">
      <Link
        href={Routes.ROOT}
        className="flex w-fit items-center"
        aria-label="Dev Wizard Home"
        passHref
      >
        <Logo aria-hidden />
      </Link>
    </div>
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-6">
      {footerNavigationConfig.map(({ name, links, isOutSourceLinks }) => (
        <NavigationColumn
          key={name}
          name={name}
          links={links}
          isOutSourceLinks={isOutSourceLinks}
        />
      ))}
    </div>
  </nav>
);
