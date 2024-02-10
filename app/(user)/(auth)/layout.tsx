import React from "react";
import { Routes } from "@/src/routes";
import UnderConstructionSVG from "@/src/assets/images/UnderConstructionSVG.svg";
import { EmptyState } from "@/src/components/EmptyState";
import { ButtonLink, ButtonLinkVariants } from "@/src/components/ButtonLink";
// TODO remove the comments to open the auth
// import { ProtectedRoute } from "@/src/providers/ProtectedRoute";
// import { Roles } from "@/src/roles";

// TODO remove the comments to open the auth
// interface LayoutProps {
//   children: ReactNode;
// }

const Layout = (/* { children }: LayoutProps */): JSX.Element => (
  // TODO remove the comments to open the auth
  // <ProtectedRoute allowedRoles={[Roles.VISITOR]} defaultRoute={Routes.ROOT}>
  //   {children}
  // </ProtectedRoute>
  <section className="flex h-full w-full items-center justify-center py-14">
    <EmptyState
      svgUrl={UnderConstructionSVG}
      header="Temporary Authentication Service Unavailability"
      description="We apologize for the inconvenience. Our authentication services are currently undergoing maintenance and will be unavailable temporarily. "
      footer={
        <ButtonLink
          href={Routes.RESET_PASSWORD}
          variant={ButtonLinkVariants.PRIMARY}
        >
          Go to Home page
        </ButtonLink>
      }
    />
  </section>
);

export default Layout;
