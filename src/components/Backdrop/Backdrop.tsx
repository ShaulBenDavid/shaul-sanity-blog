'use client';

import React from 'react';

interface BackdropProps {
  onClick: () => void;
}

const Backdrop = ({ onClick }: BackdropProps) => (
  <div
    onClick={onClick}
    aria-hidden="true"
    className=" absolute inset-0 z-50 h-[100dvh] w-screen cursor-pointer bg-black opacity-50"
  />
);

export default Backdrop;
