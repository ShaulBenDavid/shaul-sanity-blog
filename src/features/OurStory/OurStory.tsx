import React from "react";
import { Banner } from "./components/Banner";
import { AboutContent } from "./components/AboutContent";

export const OurStory = (): JSX.Element => (
  <div className="polka-bg shadow-inset-blur mx-[calc(-50vw+50%)] flex min-h-screen w-screen justify-center bg-fixed py-10">
    <section className="mx-2 flex h-fit max-w-[70ch] flex-col gap-4 rounded-md bg-white p-2 shadow-container sm:m-0 sm:p-4 tb:p-6">
      <Banner />
      <header>
        <h1 className="text-2xl font-bold md:text-6xl">
          Our Story <span className="text-primary-900">DevWizard</span>
        </h1>
      </header>
      <AboutContent />
    </section>
  </div>
);
