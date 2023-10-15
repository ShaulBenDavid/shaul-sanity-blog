import type { CSSProperties } from 'react';
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const styles: CSSProperties = {
  transform: 'scale(1)',
  height: '40vh',
  position: 'relative',
};

/**
 * # The Dropdown component
 * The dropdown component is a reusable UI element that takes in children to display its content,
 * utilizes the isOpen boolean prop to control visibility, and triggers the onClose callback when
 * the dropdown needs to be closed.
 */

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
  argTypes: {
    onClose: {
      control: 'ControlType',
      description: 'Close the dropdown onClick out of the dropdown range.',
      defaultValue: () => ({}),
    },
    isOpen: {
      control: 'boolean',
      description: 'Control the state of the Dropdown open or close.',
      default: true,
    },
    id: {
      control: 'string',
      description:
        'For accessibility purpose to know which button control the Dropdown',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Basic: Story = {
  args: {
    onClose: () => ({}),
    isOpen: true,
    children: (
      <div>
        <h1>Welcome to DWizard</h1>
      </div>
    ),
    id: 'usermenu-desc',
  },
};
