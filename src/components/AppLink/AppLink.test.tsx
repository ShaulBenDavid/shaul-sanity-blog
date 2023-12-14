import React from "react";
import { render } from "test-utils";
import { AppLink } from "./AppLink";

describe("AppLink", () => {
  it("renders correctly", () => {
    const { getByText } = render(<AppLink href="s">s</AppLink>);
    const alertElement = getByText("s");
    expect(alertElement).toBeInTheDocument();
  });

  it("expect the element to be button", () => {
    const { getByText } = render(<AppLink onClick={() => ({})}>s</AppLink>);
    const linkElement = getByText("s");
    expect(linkElement).toHaveAttribute("type", "button");
  });
});
