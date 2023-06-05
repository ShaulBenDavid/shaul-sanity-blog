import React, { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SideNavigation from './SideNavigation';

const styles: CSSProperties = {
  transform: 'scale(1)',
  height: '100vh',
  position: 'relative',
};

const meta: Meta<typeof SideNavigation> = {
  title: 'Layout/SideNavigation',
  component: SideNavigation,
  tags: ['autodocs'],
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
};

export default meta;

type Story = StoryObj<typeof SideNavigation>;

export const Primary: Story = {
  render: () => <SideNavigation onClick={() => ({})} isOpen />,
};
