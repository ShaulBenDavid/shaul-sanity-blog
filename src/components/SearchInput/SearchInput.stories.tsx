import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "Components/Inputs/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],

  args: { width: "400px" },
  argTypes: {
    width: {
      control: "string",
      description:
        "The default width is 100%, If you want something else enter value in px.",
    },
    placeholder: {
      control: "string",
      description:
        "Write an example or explanation of what the user should enter.",
    },
    value: {
      control: "string",
      description: "The input value.",
    },
    onChange: {
      control: "ControlType",
      description: "Input change callback.",
      defaultValue: () => ({}),
    },
    onReset: {
      control: "ControlType",
      description: "Reset the input value callback.",
      defaultValue: () => ({}),
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Search: Story = {
  args: {
    placeholder: "Search something",
    onReset: () => ({}),
  },
};
