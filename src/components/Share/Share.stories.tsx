import type { Meta, StoryObj } from "@storybook/react";
import { Share } from "./Share";
/**
 * # The Share component
 * The alert component is a collection buttons to share the website if the socials.
 */

const meta: Meta<typeof Share> = {
  title: "Components/Share",
  component: Share,
  tags: ["autodocs"],

  argTypes: {
    url: {
      control: "string",
      description: "To add path in the end of the url.",
    },
    title: {
      control: "string",
      description: "Title of the share.",
    },
    subject: {
      control: "string",
      description: "Title of the share.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Share>;

export const Basic: Story = {};
