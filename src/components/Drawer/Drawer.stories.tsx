import React from 'react';
import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Drawer from './Drawer';

const styles: CSSProperties = {
  transform: 'scale(1)',
  height: '40vh',
  position: 'relative',
};

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
  args: {
    onClose: () => ({}),
    isOpen: true,
  },
  argTypes: {
    onClose: {
      control: 'ControlType',
      description:
        'Close the side navigation when user click "esc" or click on the overlay',
      defaultValue: () => ({}),
    },
    isOpen: {
      control: 'boolean',
      description: 'Control the state of the drawer open or close',
      default: true,
    },
  },
};
