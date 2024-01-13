import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

/**
 * # The Accordion component
 * The Accordion component is a UI element that allows you to hide or reveal content. It consists of a title and content section.
 */

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "string" },
    content: { control: "string" },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    title: "Accordion Title",
    content: "Accordion Content",
  },
};
