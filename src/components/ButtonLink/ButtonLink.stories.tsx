import type { Meta, StoryObj } from "@storybook/react";
import { ButtonLink } from "./ButtonLink";
import { ButtonLinkVariants } from "./ButtonLink.types";

const meta: Meta<typeof ButtonLink> = {
  title: "Components/ButtonLink",
  component: ButtonLink,
  tags: ["autodocs"],
  args: {
    href: "#",
    children: "Button Link",
    width: "250px",
  },
  argTypes: {
    onClick: {
      control: "ControlType",
      description: "Button click function",
      defaultValue: () => ({}),
    },
    width: {
      control: "string",
      description: "Width if not define the default will be 100%",
    },
    variant: {
      control: "select",
      options: ButtonLinkVariants,
      description: "Control the Button style",
      default: ButtonLinkVariants.PRIMARY,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonLink>;

export const Primary: Story = {
  args: {
    variant: ButtonLinkVariants.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonLinkVariants.SECONDARY,
  },
};

export const Link: Story = {
  args: {
    variant: ButtonLinkVariants.LINK,
  },
};
