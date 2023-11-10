"use client";

import type { PropsWithChildren } from "react";
import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useOnClickOutside } from "@/src/hooks";

interface DropdownProps {
  id: string;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const Dropdown = ({
  id,
  className,
  isOpen,
  onClose,
  children,
}: PropsWithChildren<DropdownProps>): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, onClose);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Escape" || e.key === "ArrowDown") {
      onClose();
    }
  };

  return (
    <div
      ref={ref}
      className={twMerge(
        `absolute h-fit w-fit rounded-md bg-white p-2 shadow-dropdown ${
          isOpen ? "flex" : "hidden"
        }`,
        className,
      )}
      id={id}
      role="presentation"
      onKeyDown={handleKeyPress}
      data-testid="dropdown-component-test-id"
    >
      {children}
    </div>
  );
};

export default Dropdown;
