import React from "react";
import { render } from "test-utils";
import { Card } from "./Card";

describe("Card Component", () => {
  it("renders children and applies custom className", () => {
    const customClassName = "custom-class";
    const { getByTestId } = render(
      <Card className={customClassName}>
        <span data-testid="child">Card Content</span>
      </Card>,
    );

    const cardElement = getByTestId("card-component-test-id");
    const childElement = getByTestId("child");

    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass("app-card p-3");
    expect(cardElement).toHaveClass(customClassName);
    expect(childElement).toBeInTheDocument();
    expect(childElement.textContent).toBe("Card Content");
  });
});
