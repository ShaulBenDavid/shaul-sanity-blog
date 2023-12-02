import React from "react";
import { render } from "test-utils";
import { EmptyState } from "./EmptyState";

const mockData = {
  header: "Fail to verify",
  description:
    "Oops! It looks like the verification via the provided link didn't go through. Please double-check the link or try an alternative method. If the issue persists, reach out to our support team for assistance.",
};

describe("Empty State", () => {
  it("Header renders correctly", () => {
    const { getByText } = render(
      <EmptyState
        header={mockData.header}
        description={mockData.description}
      />,
    );
    const headerElement = getByText(mockData.header);
    expect(headerElement).toBeInTheDocument();
  });

  it("Description renders correctly", () => {
    const { getByText } = render(
      <EmptyState
        header={mockData.header}
        description={mockData.description}
      />,
    );
    const descriptionElement = getByText(mockData.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it("Empty state renders and has 2 children", () => {
    const { getByTestId } = render(
      <EmptyState
        header={mockData.header}
        description={mockData.description}
      />,
    );

    const emptyStateComponent = getByTestId("empty-state-component-test-id");

    expect(emptyStateComponent).toBeInTheDocument();
    expect(emptyStateComponent.children.length).toBe(2);
  });

  it("Empty state render footer", () => {
    const { getByTestId } = render(
      <EmptyState
        header={mockData.header}
        description={mockData.description}
        footer={
          <div className="grid w-80 grid-cols-2 flex-row items-center gap-2">
            <button className="app-link whitespace-nowrap">Contact Us</button>
            <button className="button-link">Verify Email</button>
          </div>
        }
      />,
    );

    const emptyStateComponent = getByTestId("empty-state-component-test-id");

    expect(emptyStateComponent).toBeInTheDocument();
    expect(emptyStateComponent.children.length).toBe(3);
  });
});
