import type { Meta, StoryObj } from '@storybook/react';
import Stepper from './Stepper';
import { registerStepsConfig } from '../../Register.config';

/**
 * # The Stepper component
 * The stepper component can be used to show a numbered list of steps next to a form
 * component to indicate the progress and number of steps that are required to
 * complete and submit the form data.
 */

const meta: Meta<typeof Stepper> = {
  title: 'Feature/Register/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    steps: {
      control: 'object',
      description: 'Pass array of steps to show',
    },
    currentStep: {
      control: 'number',
      description: 'The number of the current step. the step that you see',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Primary: Story = {
  args: {
    steps: registerStepsConfig,
    currentStep: 2,
  },
};
