import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ButtonVariants } from './Button.types';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    onClick: () => ({}),
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
      description: 'Control the Button style',
      default: ButtonVariants.PRIMARY,
    },
    isLoading: {
      control: 'boolean',
      description:
        'Control the state of the Button if loads or not if he loads the button will be disableds',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: ButtonVariants.PRIMARY,
  },
};

export const PrimaryLoading: Story = {
  args: {
    variant: ButtonVariants.PRIMARY,
    isLoading: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonVariants.SECONDARY,
  },
};

export const Link: Story = {
  args: {
    variant: ButtonVariants.LINK,
  },
};
