import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Backdrop from './Backdrop';

const meta: Meta<typeof Backdrop> = {
  title: 'Components/Backdrop',
  component: Backdrop,
};

export default meta;

type Story = StoryObj<typeof Backdrop>;

export const Primary: Story = {
  render: () => <Backdrop onClick={() => ({})} />,
};
