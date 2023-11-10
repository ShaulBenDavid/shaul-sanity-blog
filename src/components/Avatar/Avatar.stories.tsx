import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";
import { AvatarSizes } from "./Avatar.types";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {},
  argTypes: {
    name: {
      control: "text",
      description:
        "Enter a string and you will get a Avatar. If the name is one word so you will get 1 character, else 2 characters",
    },
    size: {
      control: "select",
      options: AvatarSizes,
      description: "Control the Avatar size",
      default: AvatarSizes.LARGE,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Large: Story = {
  args: {
    name: "Shaul",
    size: AvatarSizes.LARGE,
  },
};

export const Medium: Story = {
  args: {
    name: "Shaul",
    size: AvatarSizes.MEDIUM,
  },
};

export const Small: Story = {
  args: {
    name: "Shaul",
    size: AvatarSizes.SMALL,
  },
};

export const Image: Story = {
  args: {
    url: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    size: AvatarSizes.SMALL,
  },
};
