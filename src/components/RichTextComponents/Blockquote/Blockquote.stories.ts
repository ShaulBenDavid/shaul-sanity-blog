import type { Meta, StoryObj } from "@storybook/react";
import { Blockquote } from "./Blockquote";

/**
 * # The Blockquote component
 * The Blockquote component is a stylish element for displaying quoted content. It wraps
 * children in a blockquote with a distinctive background and border.
 */

// Meta information for the Blockquote component
const meta: Meta<typeof Blockquote> = {
  title: "Components/RichText/Blockquote",
  component: Blockquote,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "object",
      description: "Children components to be wrapped in the Blockquote style",
    },
  },
};

// Exporting the meta information
export default meta;

// Define the Story type
type Story = StoryObj<typeof Blockquote>;

// Default story for the Blockquote component
export const Default: Story = {
  args: {
    children: "Quoted text goes here.",
  },
};
