import React from "react";
import { fireEvent, render } from "test-utils";
import Button from "./Button";
import { ButtonVariants } from "./Button.types";

describe("Button", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Button variant={ButtonVariants.PRIMARY}>s</Button>,
    );
    const buttonElement = getByText("s");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders correctly with variant color", () => {
    const { getByText } = render(
      <Button variant={ButtonVariants.PRIMARY}>s</Button>,
    );
    const buttonElement = getByText("s");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("text-white");
    expect(buttonElement).toHaveClass("bg-primary-900");
  });

  it("triggers onClick event", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button variant={ButtonVariants.PRIMARY} onClick={handleClick}>
        s
      </Button>,
    );
    const buttonElement = getByText("s");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
