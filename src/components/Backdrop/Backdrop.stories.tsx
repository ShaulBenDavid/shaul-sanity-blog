import React, { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Backdrop from './Backdrop';

const styles: CSSProperties = {
  transform: 'scale(1)',
  height: '100vh',
  position: 'relative',
};

const meta: Meta<typeof Backdrop> = {
  title: 'Components/Backdrop',
  component: Backdrop,
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
};

export default meta;

type Story = StoryObj<typeof Backdrop>;

export const Primary: Story = {
  args: {
    onClick: () => ({}),
  },
  argTypes: {
    onClick: {
      control: 'ControlType',
      description:
        'Close the side navigation when user click "esc" or click on the overlay',
      defaultValue: () => ({}),
    },
  },
};
