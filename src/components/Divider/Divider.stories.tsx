import type { Meta, StoryObj } from '@storybook/react';
import Divider from './Divider';

/**
 * # The Divider component
 * Shows a custom HR with text
 */
const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],

  argTypes: {
    title: {
      control: 'string',
      description: 'Text of the divider',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Hr: Story = {
  args: {
    title: 'or',
  },
};
