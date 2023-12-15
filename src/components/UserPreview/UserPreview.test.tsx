import React from "react";
import { render } from "test-utils";
import { UserPreview } from "./UserPreview";

describe("UserPreview", () => {
  const user = {
    name: "John Doe",
    title: "Software Engineer",
    username: "johndoe",
  };

  it("renders correctly", () => {
    const { getByTestId, getByText } = render(<UserPreview {...user} />);
    const userPreview = getByTestId("user-preview-component-test-id");
    expect(userPreview).toBeInTheDocument();

    const avatarImage = getByText("JD");
    expect(avatarImage).toBeInTheDocument();
  });

  it("to have title", () => {
    const { getByText } = render(<UserPreview {...user} />);
    const userPreview = getByText("Software Engineer");
    expect(userPreview).toBeInTheDocument();
  });
});
