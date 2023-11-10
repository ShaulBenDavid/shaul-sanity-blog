import React from "react";
import { render } from "test-utils";
import Step from "./Step";

const mockStep = {
  title: "personal",
  subtitle: "info",
};

describe("Step", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <Step
        title={mockStep.title}
        subtitle={mockStep.subtitle}
        stepNumber={1}
        currentStep={1}
        isLastStep
        isCompletedStep
      />,
    );
    const stepElement = getByTestId("step-component-test-id");
    expect(stepElement).toBeInTheDocument();
  });

  it("Check that the step divider is render", () => {
    const { getByTestId } = render(
      <Step
        title={mockStep.title}
        subtitle={mockStep.subtitle}
        stepNumber={1}
        currentStep={1}
        isLastStep={false}
        isCompletedStep
      />,
    );
    const stepElement = getByTestId("step-component-test-id");
    expect(stepElement).toHaveClass("after:border-1");
  });

  it("Check that the step color is correct when he is before or is the current step", () => {
    const { getByTestId } = render(
      <Step
        title={mockStep.title}
        subtitle={mockStep.subtitle}
        stepNumber={1}
        currentStep={1}
        isLastStep={false}
        isCompletedStep
      />,
    );
    const stepElement = getByTestId("step-component-test-id");
    expect(stepElement).toHaveClass("text-primary-600");
  });

  it("Check that the step color is correct when he is after the current step", () => {
    const { getByTestId } = render(
      <Step
        title={mockStep.title}
        subtitle={mockStep.subtitle}
        stepNumber={3}
        currentStep={1}
        isLastStep={false}
        isCompletedStep
      />,
    );
    const stepElement = getByTestId("step-component-test-id");
    expect(stepElement).not.toHaveClass("text-primary-600");
  });
});
