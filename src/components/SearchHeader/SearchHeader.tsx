"use client";

import React, { type Dispatch, type SetStateAction } from "react";
import { SearchInput } from "@/src/components/SearchInput";

interface SearchHeaderProps {
  title: string;
  placeholder: string;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export const SearchHeader = ({
  title,
  searchValue,
  placeholder,
  setSearchValue,
}: SearchHeaderProps): JSX.Element => (
  <header className="flex flex-col justify-between gap-3 border-b-2 border-wizard-grey border-opacity-60 pb-2 md:flex-row md:items-center">
    <h1 className="text-2xl font-bold md:text-5xl">{title}</h1>
    <form className="md:w-96">
      <SearchInput
        placeholder={placeholder}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onReset={() => setSearchValue("")}
      />
    </form>
  </header>
);
