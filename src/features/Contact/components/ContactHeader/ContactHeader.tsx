import React from "react";
import theme from "@/src/styles/tailwind.theme";
import { BlobAnimation } from "../BlobAnimation";

export const ContactHeader = (): JSX.Element => (
  <div className="w-full md:w-5/12">
    <header className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
      <h1 className="text-2xl font-bold md:text-6xl">Contact-Us</h1>
      <p className="w-full text-lg tb:w-3/4 md:w-full">
        Whether you have questions about web development or you&apos;ve
        encountered an issue on our site, we&apos;re here to assist you. Please
        don&apos;t hesitate to get in touch, and we&apos;ll promptly address
        your needs.
      </p>
    </header>
    <div
      className="max-md:h-50 relative mx-auto mt-4 h-64 w-1/4 min-w-[150px] max-sm:h-40 md:mx-0 md:w-2/4 lg:mt-24"
      aria-hidden
    >
      <div className="absolute inset-0 scale-110" aria-hidden>
        <BlobAnimation
          stroke={theme.black}
          fill="transparent"
          time={13}
          amount={2}
        />
      </div>
      <div className="absolute inset-0" aria-hidden>
        <BlobAnimation
          stroke="transparent"
          fill={theme.primary[950]}
          time={17}
        />
      </div>
    </div>
  </div>
);
