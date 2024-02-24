import React from "react";
import { render } from "test-utils";
import { Blockquote } from "./Blockquote";

describe("Blockquote Component", () => {
  it("renders children with default styles", () => {
    const { getByTestId } = render(
      <Blockquote>
        <span data-testid="child">Quoted Content</span>
      </Blockquote>,
    );

    const blockquoteElement = getByTestId("blockquote-component-test-id");
    const childElement = getByTestId("child");

    expect(blockquoteElement).toBeInTheDocument();
    expect(blockquoteElement).toHaveClass(
      "w-full border-s-4 border-dw-grey bg-bg-grey p-4",
    );
    expect(childElement).toBeInTheDocument();
    expect(childElement.textContent).toBe("Quoted Content");
  });
});
