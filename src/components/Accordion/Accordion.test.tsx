import React from "react";
import { Accordion } from "./Accordion";
import { render } from "@/src/tests";

describe("Accordion component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <Accordion title="Test Title" content="Test Content" />,
    );
    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("Test Content")).toBeInTheDocument();
  });
});
