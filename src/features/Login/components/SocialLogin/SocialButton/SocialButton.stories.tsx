import type { Meta, StoryObj } from '@storybook/react';
import SocialButton from './SocialButton';
import { socialsLoginButtonsConfig } from '../SocialLogin.config';

const meta: Meta<typeof SocialButton> = {
  title: 'Login/SocialButton',
  component: SocialButton,
  tags: ['autodocs'],
  args: {
    onClick: () => ({}),
    disabled: false,
    width: '250px',
  },
  argTypes: {
    borderColor: {
      type: 'string',
      description:
        'The color of the border need to contain the social theme "Facebook = blue"',
    },
    onClick: {
      control: 'ControlType',
      description: 'Button click function',
      defaultValue: () => ({}),
    },
    width: {
      control: 'string',
      description: 'Width if not define the default will be 100%',
    },
    children: {
      type: 'string',
      description: 'Need to contain a social icon and text.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SocialButton>;

export const Google: Story = {
  args: {
    children: socialsLoginButtonsConfig[1].children,
    borderColor: socialsLoginButtonsConfig[1].borderColor,
  },
};

export const Twitter: Story = {
  args: {
    children: socialsLoginButtonsConfig[0].children,
    borderColor: socialsLoginButtonsConfig[0].borderColor,
  },
};

export const Facebook: Story = {
  args: {
    children: socialsLoginButtonsConfig[2].children,
    borderColor: socialsLoginButtonsConfig[2].borderColor,
  },
};
