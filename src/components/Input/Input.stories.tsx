import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [
    (storyFn) => {
      const formMethods = useForm();
      return (
        <FormProvider {...formMethods}>
          <div className="h-full w-full">{storyFn()}</div>
        </FormProvider>
      );
    },
  ],
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

export const Password: Story = {
  args: {
    label: 'password',
    idFor: 'password',
    type: 'password',
    placeholder: 'enter your password',
  },
};
