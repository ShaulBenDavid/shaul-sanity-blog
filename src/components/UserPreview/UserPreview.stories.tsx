import type { Meta, StoryObj } from '@storybook/react';
import UserPreview from './UserPreview';

/**
 * # The UserPreview component
 * The UserPreview component is a React functional component that
 * displays a user's preview information in a styled layout.
 * It takes in several props to customize the preview:
 */

const meta: Meta<typeof UserPreview> = {
  title: 'Components/UserPreview',
  component: UserPreview,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: ' (string): The name of the user.',
    },
    title: {
      control: 'text',
      description:
        '(string | null): The title of the user. Can be null if no title is available.',
    },
    imageUrl: {
      control: 'text',
      description:
        "(string | undefined): The URL of the user's image. Can be undefined if no image is available.",
    },
    username: {
      control: 'text',
      description: '(string): The username of the user.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof UserPreview>;

export const Primary: Story = {
  args: {
    name: 'shon david',
    title: 'CTO',
    username: 'shon12',
  },
};
