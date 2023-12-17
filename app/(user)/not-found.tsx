import React from "react";
import Link from "next/link";
import { EmptyState } from "@/src/components/EmptyState";
import NotFoundSVG from "@/src/assets/404SVG.svg";
import { Routes } from "@/src/routes";

const NotFound = () => (
  <section className="flex h-full w-full items-center justify-center py-14">
    <EmptyState
      svgUrl={NotFoundSVG}
      header="Page Not Found"
      footer={
        <Link href={Routes.ROOT} className="button-link w-40">
          Go to home page
        </Link>
      }
    />
  </section>
);

export default NotFound;
