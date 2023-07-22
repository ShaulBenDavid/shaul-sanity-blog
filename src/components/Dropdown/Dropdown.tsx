import React, { PropsWithChildren, useRef } from 'react';
import { useOnClickOutside } from '@/src/hooks';

interface DropdownProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

const Dropdown = ({
  id,
  isOpen,
  onClose,
  children,
}: PropsWithChildren<DropdownProps>): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, onClose);

  return (
    <div
      ref={ref}
      className={`absolute h-fit w-fit rounded-md bg-white p-2 shadow-dropdown ${
        isOpen ? 'flex' : 'hidden'
      }`}
      id={id}
      data-testid="dropdown-component-test-id"
    >
      {children}
    </div>
  );
};

export default Dropdown;
