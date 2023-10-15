import React from 'react';
import Step from './Step';
import type { StepsType } from './Stepper.types';

interface StepperProps {
  steps: StepsType;
  currentStep: number;
}

const Stepper = ({ steps, currentStep }: StepperProps): JSX.Element => (
  <ol
    className="flex w-full items-center text-center text-sm font-medium text-gray-500 sm:text-base"
    data-testid="stepper-component-test-id"
  >
    {steps.map((step, idx) => {
      const stepNum = idx + 1;

      return (
        <Step
          key={step.title}
          title={step.title}
          subtitle={step.subtitle}
          stepNumber={stepNum}
          currentStep={currentStep}
          isLastStep={steps.length === stepNum}
          isCompletedStep={stepNum <= currentStep}
        />
      );
    })}
  </ol>
);

export default Stepper;
