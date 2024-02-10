import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import WarningSVG from "@/src/assets/images/WarningDrawSVG.svg";
import { EmptyState } from "./EmptyState";
import { ButtonLink, ButtonLinkVariants } from "../ButtonLink";

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
    svgUrl: {
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
    footer: {
      control: "object",
      description:
        "A component props for footer. If we want to add a link for example..",
    },
  },
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Primary: Story = {
  args: {
    svgUrl: WarningSVG,
    header: "Fail to verify",
    description:
      "Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues.",
  },
};
export const WithFooter: Story = {
  args: {
    svgUrl: WarningSVG,
    header: "Fail to verify",
    description:
      "Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues.",
    footer: (
      <div className="grid w-80 grid-cols-2 flex-row items-center gap-2">
        <ButtonLink href="#" variant={ButtonLinkVariants.LINK}>
          Contact Us
        </ButtonLink>
        <ButtonLink href="#" variant={ButtonLinkVariants.PRIMARY}>
          Reset Password
        </ButtonLink>
      </div>
    ),
  },
};
