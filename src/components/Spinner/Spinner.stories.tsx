import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';
import { SpinnerSize, SpinnerVariants } from './Spinner.types';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: SpinnerVariants,
      description: 'Control the Spinner style',
      default: SpinnerVariants.PRIMARY,
    },
    size: {
      control: 'select',
      options: SpinnerSize,
      description: 'Control the Spinner style',
      default: SpinnerSize.LARGE,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {
  args: {
    variant: SpinnerVariants.PRIMARY,
    size: SpinnerSize.LARGE,
  },
};

export const White: Story = {
  args: {
    variant: SpinnerVariants.WHITE,
    size: SpinnerSize.LARGE,
  },
};
