import React from "react";
import { Share } from "@/src/components/Share";
import { TopicsList } from "../TopicsList";

export const Aside = (): JSX.Element => (
  <aside className="sticky top-20 flex h-fit w-96 flex-col gap-4 max-lg:w-72 max-md:hidden">
    {/* @ts-expect-error Server Component */}
    <TopicsList />
    <hr className="border-dw-grey" />
    <Share />
  </aside>
);
