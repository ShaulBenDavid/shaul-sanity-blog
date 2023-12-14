import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";
import { AlertVariants } from "./Alert.types";

/**
 * # The Alert component
 * The alert component can be used to provide information to your users such as success or error messages,
 * but also highlighted information complementing the normal flow of paragraphs and headers on a page.
 */

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    width: "500px",
    content:
      "The alert component can be used to provide information to your users such as success or error messages, but also highlighted information",
  },
  argTypes: {
    content: {
      control: "string",
      description: "Provide information to your users.",
    },
    width: {
      control: "string",
      description: "Width if not define the default will be 100%",
    },
    variant: {
      control: "select",
      options: AlertVariants,
      description: "Control the Alert style",
      default: AlertVariants.INFO,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: AlertVariants.INFO,
  },
};

export const Danger: Story = {
  args: {
    variant: AlertVariants.DANGER,
  },
};

export const Warning: Story = {
  args: {
    variant: AlertVariants.WARNING,
  },
};

export const Success: Story = {
  args: {
    variant: AlertVariants.SUCCESS,
  },
};
