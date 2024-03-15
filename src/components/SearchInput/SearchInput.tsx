import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import theme from "@/src/styles/tailwind.theme";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
}

export const SearchInput = ({
  width,
  value,
  onChange,
  placeholder,
}: SearchInputProps): JSX.Element => (
  <div
    className="flex h-10 flex-row items-center rounded-md border-[1px] border-secondary-950 bg-transparent px-2 text-secondary-950 focus-within:border-2 focus-within:border-primary-900"
    style={{ width }}
    data-testid="app-search-input-test-id"
  >
    <input
      type="search"
      placeholder={placeholder}
      value={value}
      className="w-full placeholder:text-wizard-grey focus:outline-none"
      onChange={onChange}
      aria-label="search"
      aria-controls="searchResults"
    />
    {value ? (
      <IoClose
        stroke={theme.secondary["950"]}
        size={24}
        aria-hidden
        data-testid="app-search-input-close-icon-test-id"
      />
    ) : (
      <HiOutlineSearch
        stroke={theme.secondary["950"]}
        size={24}
        aria-hidden
        data-testid="app-search-input-icon-test-id"
      />
    )}
  </div>
);
