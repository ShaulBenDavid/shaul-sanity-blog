"use client";

import React from "react";
import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface DropdownProps {
  id: string;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Dropdown = ({
  id,
  className,
  isOpen,
  onClose,
  children,
}: PropsWithChildren<DropdownProps>): JSX.Element => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Escape" || e.key === "ArrowDown") {
      onClose();
    }
  };

  const handleClose = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    event.stopPropagation();
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          aria-hidden
          className="fixed inset-0 h-screen w-screen"
          onClick={handleClose}
        />
      )}
      <div
        className={twMerge(
          `absolute h-fit w-fit rounded-md bg-white p-2 shadow-dropdown ${
            isOpen ? "flex" : "hidden"
          }`,
          className,
        )}
        id={id}
        role="presentation"
        tabIndex={-1}
        aria-hidden={!isOpen}
        onKeyDown={handleKeyPress}
        data-testid="dropdown-component-test-id"
      >
        {children}
      </div>
    </>
  );
};
