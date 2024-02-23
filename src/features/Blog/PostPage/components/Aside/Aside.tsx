import React from "react";
import { Share } from "@/src/components/Share";
import { buildRoutePath } from "@/src/utils";
import { Routes } from "@/src/routes";

interface AsideProps {
  postSlug: string;
}

export const Aside = ({ postSlug }: AsideProps): JSX.Element => (
  <aside className="sticky top-20 flex h-fit w-96 max-lg:w-72 max-md:hidden">
    <Share url={buildRoutePath(Routes.POST, postSlug)} />
  </aside>
);
