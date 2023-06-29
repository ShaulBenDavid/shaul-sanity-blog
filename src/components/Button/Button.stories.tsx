import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ButtonVariants } from './Button.types';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    onClick: () => ({}),
    variant: ButtonVariants.PRIMARY,
    children: 'button',
    disabled: false,
    isLoading: false,
    width: '250px',
  },
  argTypes: {
    onClick: {
      control: 'ControlType',
      description: 'Button click function',
      defaultValue: () => ({}),
    },
    width: {
      control: 'string',
      description: 'Width if not define the default will be 100%',
    },
    variant: {
      control: 'select',
      options: ButtonVariants,
      description: 'Control the state of the Button open or close',
      default: ButtonVariants.PRIMARY,
    },
    isLoading: {
      control: 'boolean',
      description:
        'Control the state of the Button if loads or not if he loads the button will be disableds',
    },
  },
};
