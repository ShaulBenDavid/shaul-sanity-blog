import React from "react";
import { Detail } from "./Detail";
import { render } from "@/src/tests";

describe("Detail component", () => {
  it("renders without crashing", () => {
    const icon = <svg>YourIcon</svg>;
    const value = "Test Value";

    render(<Detail icon={icon} value={value} />);
  });

  it("renders a link when href is provided", () => {
    const icon = <svg>YourIcon</svg>;
    const value = "Test Value";
    const href = "https://example.com";

    const { container } = render(
      <Detail icon={icon} value={value} href={href} />,
    );
    const linkElement = container.querySelector("a");

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", href);
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noreferrer");
  });

  it("renders the correct icon and value", () => {
    const icon = <svg>YourIcon</svg>;
    const value = "Test Value";

    const { getByText } = render(<Detail icon={icon} value={value} />);
    const iconElement = getByText("Test Value").previousSibling;

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toContainHTML("<svg>YourIcon</svg>");
    expect(getByText("Test Value")).toBeInTheDocument();
  });
});
