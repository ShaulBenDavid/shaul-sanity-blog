import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SearchHeader } from "./SearchHeader";

describe("SearchHeader", () => {
  it("renders correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <SearchHeader
        title="Test Title"
        searchValue=""
        placeholder="Search..."
        setSearchValue={() => {}}
      />,
    );
    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("updates search value on input change", () => {
    let searchValue = "";
    const setSearchValue = jest.fn().mockImplementation((value) => {
      searchValue = value;
    });

    const { getByPlaceholderText } = render(
      <SearchHeader
        title="Test Title"
        searchValue={searchValue}
        placeholder="Search..."
        setSearchValue={setSearchValue}
      />,
    );

    const inputElement = getByPlaceholderText("Search...");
    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(searchValue).toBe("test");
    expect(setSearchValue).toHaveBeenCalledWith("test");
  });

  it("clears search value on reset", () => {
    let searchValue = "test";
    const setSearchValue = jest.fn().mockImplementation((value) => {
      searchValue = value;
    });

    const { getByTestId } = render(
      <SearchHeader
        title="Test Title"
        searchValue={searchValue}
        placeholder="Search..."
        setSearchValue={setSearchValue}
      />,
    );

    const resetButton = getByTestId("app-search-input-close-icon-test-id");
    fireEvent.click(resetButton);

    expect(searchValue).toBe("");
    expect(setSearchValue).toHaveBeenCalledWith("");
  });

  it("renders search icon when searchValue is empty", () => {
    const { getByTestId } = render(
      <SearchHeader
        title="Test Title"
        searchValue=""
        placeholder="Search..."
        setSearchValue={() => {}}
      />,
    );

    const searchIcon = getByTestId("app-search-input-icon-test-id");
    expect(searchIcon).toBeInTheDocument();
  });

  it("renders close icon when searchValue is not empty", () => {
    const { getByTestId } = render(
      <SearchHeader
        title="Test Title"
        searchValue="test"
        placeholder="Search..."
        setSearchValue={() => {}}
      />,
    );

    const closeIcon = getByTestId("app-search-input-close-icon-test-id");
    expect(closeIcon).toBeInTheDocument();
  });
});
