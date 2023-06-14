import React, { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Drawer from './Drawer';

const styles: CSSProperties = {
  transform: 'scale(1)',
  height: '100vh',
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
  render: () => <Drawer isOpen onClose={() => ({})} />,
};
