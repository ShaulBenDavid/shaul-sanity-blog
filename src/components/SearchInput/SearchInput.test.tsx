import React from "react";
import { render } from "test-utils";
import { SearchInput } from "./SearchInput";

describe("SearchInput", () => {
  it("Input renders correctly", () => {
    const { getByTestId } = render(<SearchInput />);
    const buttonElement = getByTestId("app-search-input-test-id");
    expect(buttonElement).toBeInTheDocument();
  });

  it("Render close icon when we have value", () => {
    const { getByTestId } = render(<SearchInput value="test" />);
    const inputElement = getByTestId("app-search-input-close-icon-test-id");
    expect(inputElement).toBeInTheDocument();
  });

  it("Render search icon when we don't have value", () => {
    const { getByTestId } = render(<SearchInput />);
    const inputElement = getByTestId("app-search-input-icon-test-id");
    expect(inputElement).toBeInTheDocument();
  });
});
