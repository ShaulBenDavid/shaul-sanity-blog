import React from 'react';
import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AppLink from './AppLink';

const styles: CSSProperties = {
  transform: 'scale(1)',
  height: '40vh',
  position: 'relative',
};

/**
 * # The AppLink component
 * The AppLink component is a reusable custom link that can be also a button.
 * if you pass href you can't pass onClick and vice versa.
 */

const meta: Meta<typeof AppLink> = {
  title: 'Components/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
  argTypes: {
    onClick: {
      control: 'ControlType',
      description: 'A callback function of the button.',
      defaultValue: () => ({}),
    },
    href: {
      control: 'string',
      description: 'A path for the wanted route',
    },
  },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Link: Story = {
  args: {
    href: '/',
    children: 'Settings',
  },
};

export const Button: Story = {
  args: {
    onClick: () => ({}),
    children: 'Settings',
  },
};
