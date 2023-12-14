import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";

/**
 * # The Chip component
 * A chip component is a small, reusable UI element commonly used in web and mobile
 * applications to display compact information, tags, or actions in a visually appealing manner.
 * It resembles a physical chip and is often used for displaying tags, labels, or user-selected options.
 */

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  args: {},
  argTypes: {
    name: {
      control: "text",
      description: "The text you want to show on the chip link",
    },
    href: {
      control: "string",
      description: "A path for the wanted route",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Basic: Story = {
  args: {
    name: "front end",
    href: "",
  },
};
