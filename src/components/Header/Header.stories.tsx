import React, { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const styles: CSSProperties = {
  transform: 'scale(1)',
  height: '100vh',
  position: 'relative',
};

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  render: () => <Header />,
};
