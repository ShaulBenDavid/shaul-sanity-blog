import React from "react";
import { Share } from "@/src/components/Share";
import { TopicsList } from "../TopicsList";

export const TopContentTablet = (): JSX.Element => (
  <div className="hidden flex-col gap-4 max-md:flex">
    {/* @ts-expect-error Server Component */}
    <TopicsList />
    <hr className="mx-[calc(-50vw+50%)] border-dw-grey" />
    <Share />
    <hr className="mx-[calc(-50vw+50%)] border-dw-grey" />
  </div>
);
