"use client";

import React from "react";
import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface DropdownProps {
  label: string;
  className?: string;
  isOpen: boolean;
  trigger: JSX.Element;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Dropdown = ({
  label,
  className,
  isOpen,
  trigger,
  setState,
  children,
}: PropsWithChildren<DropdownProps>): JSX.Element => {
  const ariaLabel = `${label.replace(" ", "-")}-desc`;

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Escape" || e.key === "ArrowDown") {
      setState(false);
    }
  };

  const handleClose = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    event.stopPropagation();
    setState(false);
  };

  return (
    <div className="relative h-fit">
      <button
        className="hover:drop-shadow-lg"
        onClick={() => setState(true)}
        type="button"
        aria-expanded={isOpen}
        aria-controls={ariaLabel}
        aria-label={label}
      >
        {trigger}
      </button>
      {isOpen && (
        <div
          aria-hidden
          className="fixed inset-0 h-screen w-screen"
          onClick={handleClose}
        />
      )}
      <div
        className={twMerge(
          `absolute top-[115%] z-50 h-fit w-fit flex-col rounded-md bg-white p-2 shadow-dropdown ${
            isOpen ? "flex" : "hidden"
          }`,
          className,
        )}
        id={ariaLabel}
        role="presentation"
        tabIndex={-1}
        aria-hidden={!isOpen}
        onKeyDown={handleKeyPress}
        data-testid="dropdown-component-test-id"
      >
        {children}
      </div>
    </div>
  );
};
