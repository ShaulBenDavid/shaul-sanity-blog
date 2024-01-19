"use client";

import React from "react";
import WarningSVG from "@/src/assets/WarningDrawSVG.svg";
import { EmptyState } from "@/src/components/EmptyState";
import { Routes } from "@/src/routes";
import { ButtonLink, ButtonLinkVariants } from "@/src/components/ButtonLink";

export const ErrorMessage = (): JSX.Element => (
  <EmptyState
    svgUrl={WarningSVG}
    header="Something went wrong"
    description="Oops! It looks like the verification via the provided link didn't go through. Please double-check the link or try an alternative method. If the issue persists, reach out to our support team for assistance."
    footer={
      <div className="grid w-80 grid-cols-2 flex-row items-center gap-2">
        <ButtonLink href={Routes.CONTACT_US} variant={ButtonLinkVariants.LINK}>
          Contact Us
        </ButtonLink>
        <ButtonLink
          href={Routes.RESET_PASSWORD}
          variant={ButtonLinkVariants.PRIMARY}
        >
          Reset Password
        </ButtonLink>
      </div>
    }
  />
);
