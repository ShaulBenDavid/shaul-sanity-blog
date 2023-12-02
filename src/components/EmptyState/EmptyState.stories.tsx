import type { Meta, StoryObj } from "@storybook/react";
import WarningSVG from "@/src/assets/WarningDrawSVG.svg";
import { EmptyState } from "./EmptyState";

/**
 * # The EmptyState component
 * An empty state appears when there is no data to display and describes what the user can do next.
 * Or if something failed.
 */

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],

  argTypes: {
    svg: {
      control: "string",
      description: "The SVG image 'import' that you want to show.",
    },
    header: {
      control: "string",
      description: "Just a shot title on the error type.",
    },
    description: {
      control: "string",
      description:
        "Short description on the error, and what option the user have.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Error: Story = {
  args: {
    svg: WarningSVG,
    header: "Fail to verify",
    description:
      "Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues.",
  },
};
