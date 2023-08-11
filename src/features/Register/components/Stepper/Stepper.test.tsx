import React from 'react';
import { render } from 'test-utils';
import Stepper from './Stepper';

const mockSteps = [
  {
    title: 'personal',
    subtitle: 'info',
  },
  {
    title: 'account',
    subtitle: 'info',
  },
  {
    title: 'confirmation',
  },
];

describe('Stepper', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Stepper steps={mockSteps} currentStep={2} />
    );
    const stepperElement = getByTestId('stepper-component-test-id');
    expect(stepperElement).toBeInTheDocument();
  });

  it('Check if the number of steps inside is correct', () => {
    const { getByTestId } = render(
      <Stepper steps={mockSteps} currentStep={2} />
    );
    const stepperElement = getByTestId('stepper-component-test-id');
    expect(stepperElement.childElementCount).toBe(mockSteps.length);
  });
});
