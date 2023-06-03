'use client';

import React from 'react';

type BurgerButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

const BurgerButton = ({ onClick }: BurgerButton) => (
  <button
    onClick={onClick}
    type="button"
    id="open-nav"
    aria-label="menu"
    aria-controls="navigation-drawer"
    className="mr-2 scale-x-[-1] p-2 tb:hidden"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </button>
);

export default BurgerButton;
