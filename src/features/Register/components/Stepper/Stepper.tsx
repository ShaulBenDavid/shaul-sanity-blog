import React from 'react';
import Step from './Step';
import { StepsType } from './Stepper.types';

interface StepperProps {
  steps: StepsType;
  currentStep: number;
}

const Stepper = ({ steps, currentStep }: StepperProps): JSX.Element => (
  <ol className="flex w-full items-center text-center text-sm font-medium text-gray-500 sm:text-base ">
    {steps.map((step, idx) => {
      const stepNum = idx + 1;

      return (
        <Step
          title={step.title}
          subtitle={step.subtitle}
          stepNumber={stepNum}
          isLastStep={steps.length === stepNum}
          isCompletedStep={stepNum <= currentStep}
        />
      );
    })}
  </ol>
);

export default Stepper;
