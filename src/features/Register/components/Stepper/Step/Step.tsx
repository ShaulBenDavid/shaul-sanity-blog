import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { stepStyles } from "./Step.style";

interface StepProps {
  title: string;
  subtitle?: string;
  stepNumber: number;
  currentStep: number;
  isLastStep: boolean;
  isCompletedStep: boolean;
}

const Step = ({
  title,
  subtitle,
  stepNumber,
  currentStep,
  isLastStep,
  isCompletedStep,
}: StepProps): JSX.Element => {
  const { step, smallSeparator } = stepStyles;

  return (
    <li
      className={`
      flex items-center capitalize
      ${isLastStep ? "" : step.notLast} 
      ${stepNumber <= currentStep ? step.current : ""}
      ${stepNumber < currentStep ? step.separator : ""}
    `}
      data-testid="step-component-test-id"
    >
      <span className={`flex items-center ${isLastStep ? "" : smallSeparator}`}>
        {isCompletedStep ? (
          <BsFillCheckCircleFill
            height="14px"
            width="14px"
            aria-hidden
            fill="currentColor"
            className="mr-1"
          />
        ) : (
          <span className="mr-2">{stepNumber}</span>
        )}
        {title}
        {subtitle && (
          <span className="hidden sm:ml-2 sm:inline-flex">{subtitle}</span>
        )}
      </span>
    </li>
  );
};

export default Step;
