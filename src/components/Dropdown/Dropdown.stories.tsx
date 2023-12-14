import React, { useState } from "react";
import type { CSSProperties } from "react";
import type { Meta } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const styles: CSSProperties = {
  transform: "scale(1)",
  height: "40vh",
  position: "relative",
};

/**
 * # The Dropdown component
 * The dropdown component is a reusable UI element that takes in children to display its content,
 * utilizes the isOpen boolean prop to control visibility, and triggers the onClose callback when
 * the dropdown needs to be closed.
 */

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
  argTypes: {
    onClose: {
      control: "ControlType",
      description: "Close the dropdown onClick out of the dropdown range.",
      defaultValue: () => ({}),
    },
    isOpen: {
      control: "boolean",
      description: "Control the state of the Dropdown open or close.",
      default: true,
    },
    id: {
      control: "string",
      description:
        "For accessibility purpose to know which button control the Dropdown",
    },
  },
};

export default meta;

export const Basic = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="username-desc"
        aria-label="User menu"
      >
        Open
      </button>
      <Dropdown
        id="usermenu-desc"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ul>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      </Dropdown>
    </div>
  );
};
