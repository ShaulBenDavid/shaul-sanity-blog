import React from "react";
import { EmptyState } from "@/src/components/EmptyState";
import NotFoundSVG from "@/src/assets/images/404SVG.svg";
import { Routes } from "@/src/routes";
import { ButtonLink, ButtonLinkVariants } from "@/src/components/ButtonLink";

const NotFound = () => (
  <section className="flex h-full w-full items-center justify-center py-14">
    <EmptyState
      svgUrl={NotFoundSVG}
      header="Page Not Found"
      footer={
        <ButtonLink
          href={Routes.ROOT}
          variant={ButtonLinkVariants.PRIMARY}
          width="180px"
        >
          Go to home page
        </ButtonLink>
      }
    />
  </section>
);

export default NotFound;
