import React from 'react';
import theme from '@/src/styles/tailwind.theme';
import { BlobAnimation } from '../BlobAnimation';

export const ContactHeader = (): JSX.Element => (
  <div className="w-2/4">
    <div className="flex flex-col gap-4">
      <h1 className="text-6xl font-bold">Contact-Us</h1>
      <p className="text-lg ">
        Whether you have questions about web development or you&apos;ve
        encountered an issue on our site, we&apos;re here to assist you.
        <br />
        Please don&apos;t hesitate to get in touch, and we&apos;ll promptly
        address your needs.
      </p>
    </div>
    <div className="relative mt-16 h-64 w-2/4" aria-hidden>
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
