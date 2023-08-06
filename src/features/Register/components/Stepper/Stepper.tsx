import React from 'react';

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper = ({ steps, currentStep }: StepperProps): JSX.Element => (
  <div>
    {currentStep}
    {steps.map((step) => (
      <p>{step}</p>
    ))}
  </div>
);

export default Stepper;
