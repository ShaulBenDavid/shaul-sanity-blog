import React from "react";
import { render } from "test-utils";
import { ButtonLink } from "./ButtonLink";
import { ButtonLinkVariants } from "./ButtonLink.types";

describe("ButtonLink", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ButtonLink variant={ButtonLinkVariants.PRIMARY} href="#">
        s
      </ButtonLink>,
    );
    const buttonElement = getByText("s");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders correctly with variant color", () => {
    const { getByText } = render(
      <ButtonLink variant={ButtonLinkVariants.PRIMARY} href="#">
        s
      </ButtonLink>,
    );
    const buttonElement = getByText("s");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("text-white");
    expect(buttonElement).toHaveClass("bg-primary-900");
  });
});
