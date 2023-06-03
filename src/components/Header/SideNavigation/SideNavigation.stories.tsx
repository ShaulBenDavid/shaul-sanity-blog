import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SideNavigation from './SideNavigation';

const meta: Meta<typeof SideNavigation> = {
  title: 'Layout/SideNavigation',
  component: SideNavigation,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SideNavigation>;

export const Primary: Story = {
  render: () => <SideNavigation onClick={() => ({})} isOpen />,
};
