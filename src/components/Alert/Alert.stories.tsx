import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";
import { AlertVariants } from "./Alert.types";

/**
 * # The ButtonLink component
 * The ButtonLink component combines the functionality of a link with the appearance of a button.
 * It is useful for creating interactive elements that trigger navigation actions in your application.
 * The component supports different variants to match your design system and is styled accordingly.
 *
 * @component
 * @example
 * // Basic usage
 * <ButtonLink variant="primary" href="/dashboard">Go to Dashboard</ButtonLink>
 *
 * @param {ButtonLinkProps} props - The properties of the ButtonLink component.
 * @param {ButtonLinkVariants} props.variant - The visual variant of the button link.
 * @param {ReactNode} props.children - The content of the button link.
 * @param {LinkProps} props... - Additional properties from the Next.js Link component.
 * @returns {JSX.Element} - The rendered ButtonLink component.
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
