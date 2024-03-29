import React from "react";
import { Aside } from "./components/Aside";
import { Main } from "./components/Main";
import { TopContentTablet } from "./components/TopContentTablet";

export const HomeContent = (): JSX.Element => (
  <div className="flex flex-row justify-between gap-32 max-md:flex-col max-md:justify-normal max-md:gap-8 max-md:overflow-x-hidden">
    <TopContentTablet />
    {/* @ts-expect-error Server Component */}
    <Main />
    <Aside />
  </div>
);
