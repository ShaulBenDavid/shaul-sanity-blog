import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';

/**
 * # The Text Area component
 * The <textarea> HTML element represents a multi-line plain-text editing control,
 * useful when you want to allow users to enter a sizeable amount of free-form text,
 * for example a comment on a review or feedback form.
 */

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
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
    rows: {
      control: 'number',
      description: `The number of visible text lines for the control. If it is specified,
          it must be a positive integer.If it is not specified, the default value is 5.`,
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

type Story = StoryObj<typeof TextArea>;

export const Text: Story = {
  args: {
    label: 'Text Area',
    idFor: 'email',
    placeholder: 'Write something...',
  },
};
