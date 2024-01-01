import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

/**
 * # The Card component
 * The Card component is a reusable UI element that takes in children to display its content,
 * the Card is a common UI component with background and border that wrap elements
 */

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "string",
      description:
        "Overwrite the existing class, use it for size control only! ",
    },
    children: {
      control: "object",
      description: "Children component that will be Wrap with the Card style",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <h1>Hello World</h1>,
    className: "w-40",
  },
};
