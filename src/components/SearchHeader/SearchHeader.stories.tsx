import type { Meta, StoryObj } from "@storybook/react";
import { SearchHeader } from "./SearchHeader";

/**
 * # The SearchHeader component
 * A generic component of search and title
 */

const meta: Meta<typeof SearchHeader> = {
  title: "Components/SearchHeader",
  component: SearchHeader,
  tags: ["autodocs"],
  args: {},
  argTypes: {
    title: {
      control: "text",
      description: "Title of the page.",
    },
    placeholder: {
      placeholder: "string",
      description: "Placeholder for the search input",
    },
    searchValue: {
      placeholder: "string",
      description: "Value from the search state",
    },
    setSearchValue: {
      control: "ControlType",
      description:
        "Function that runs every input change to update value / or to reset the value",
      defaultValue: () => ({}),
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchHeader>;

export const Basic: Story = {
  args: {
    title: "Blog",
    placeholder: "Search post",
  },
};
