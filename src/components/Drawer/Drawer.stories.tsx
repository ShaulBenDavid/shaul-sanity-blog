import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Drawer from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
  render: () => <Drawer isOpen onClose={() => ({})} />,
};
