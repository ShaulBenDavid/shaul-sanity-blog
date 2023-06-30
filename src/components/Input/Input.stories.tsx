import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: { width: '400px' },
  argTypes: {
    width: {
      control: 'string',
      description:
        'The default width is 100%, If you want something else enter value in px.',
    },
    label: {
      control: 'string',
      description: 'Label write for what the input use.',
    },
    idFor: {
      control: 'string',
      description: 'Just connect between the label to the input.',
    },
    type: {
      control: 'select',
      options: ['email', 'password', 'text', 'url'],
      description: 'Just connect between the label to the input.',
    },
    placeholder: {
      control: 'string',
      description:
        'Write an example or explanation of what the user should enter.',
    },
    error: {
      control: 'string',
      description:
        'When you use validation on the input, If you enter an error. The design will change to danger, and the error will shows.',
    },
    value: {
      control: 'string',
      description: 'The input value.',
    },
    onChange: {
      control: 'ControlType',
      description: 'Input change callback.',
      defaultValue: () => ({}),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Email: Story = {
  args: {
    label: 'email',
    idFor: 'email',
    type: '',
    placeholder: 'example@gmail.com',
  },
};

export const EmailWithError: Story = {
  args: {
    label: 'email',
    idFor: 'email',
    type: 'email',
    value: 'testgmail.com',
    error: 'wrong password',
  },
};
export const Password: Story = {
  args: {
    label: 'password',
    idFor: 'password',
    type: 'password',
    placeholder: 'enter your password',
  },
};

export const PasswordWithError: Story = {
  args: {
    label: 'password',
    idFor: 'password',
    type: 'password',
    placeholder: 'enter your password',
    value: 'qqwdqwdq',
    error: 'wrong password',
  },
};
