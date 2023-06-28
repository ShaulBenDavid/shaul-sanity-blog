import React, { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SideNavigation from './SideNavigation';
import { navigationLinksConfig } from '../Header/Header.config';

const styles: CSSProperties = {
  transform: 'scale(1)',
  height: '30vh',
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
  args: {
    onClick: () => ({}),
    isOpen: true,
    navLinks: navigationLinksConfig,
  },
  argTypes: {
    onClick: {
      control: 'ControlType',
      description:
        'Toggle the side navigation when user click "esc" or click on the overlay',
      defaultValue: () => ({}),
    },
    navLinks: {
      control: 'object',
      description: 'Array of object the represent links',
    },
    isOpen: {
      control: 'boolean',
      description: 'Control the state of the drawer open or close',
      default: true,
    },
  },
};
