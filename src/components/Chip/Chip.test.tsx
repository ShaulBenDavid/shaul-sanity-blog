import React from "react";
import { render } from "test-utils";
import Chip from "./Chip";

describe("Chip", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Chip href="/" name="front" />);
    const chipElement = getByTestId("chip-component-test-id");
    expect(chipElement).toBeInTheDocument();
  });
});
