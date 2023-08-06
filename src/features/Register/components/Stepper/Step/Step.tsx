import React from 'react';

interface StepProps {
  name: string;
  isLastStep: boolean;
  isCurrentStep: boolean;
}

const Step = ({ name, isLastStep, isCurrentStep }: StepProps): JSX.Element => (
  <div>
    {name}
    {isLastStep}
    {isCurrentStep}
  </div>
);

export default Step;
