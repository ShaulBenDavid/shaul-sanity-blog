import React from "react";

export const Header = (): JSX.Element => (
  <header className="flex flex-col items-center gap-2 text-center md:gap-4">
    <h1 className="text-2xl font-bold md:text-5xl">Topics</h1>
    <p className="max-w-[70ch] text-lg">
      Explore various programming topics on Dev Wizard - your go-to programming
      blog for developers. Dive into tutorials, tips, and discussions on
      programming languages, frameworks, and technologies.
    </p>
  </header>
);
