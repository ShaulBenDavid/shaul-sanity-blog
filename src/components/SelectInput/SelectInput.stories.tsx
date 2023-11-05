import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import type { Meta, StoryObj } from '@storybook/react';
import { SelectInput } from './SelectInput';

/**
 * # The Text SelectInput component
 * The <select> HTML element represents a input select options
 */

const meta: Meta<typeof SelectInput> = {
  title: 'Components/Inputs/SelectInput',
  component: SelectInput,
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
    form: {
      control: 'string',
      description:
        'The form element that the <textarea> element is associated with (its "form owner"). ',
    },
    options: {
      control: 'object',
      description: `Provides a select to choose a single value from the options.`,
    },
    idFor: {
      control: 'string',
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

type Story = StoryObj<typeof SelectInput>;

export const Default: Story = {
  args: {
    label: 'Select',
    idFor: 'email',
    placeholder: 'Write something...',
    options: ['other', 'blue', 'yellow'],
  },
};
