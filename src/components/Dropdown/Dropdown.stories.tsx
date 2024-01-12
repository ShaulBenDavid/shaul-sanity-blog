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
 * utilizes the isOpen boolean prop to control visibility, and triggers the setState callback when
 * the dropdown needs to be closed.
 *
 * @component
 *
 * @example
 * ```jsx
 * const [isOpen, setIsOpen] = useState(false);
 * return (
 *   <div>
 *     <button
 *       type="button"
 *       onClick={() => setIsOpen(true)}
 *       aria-expanded={isOpen}
 *       aria-controls="usermenu-desc"
 *       aria-label="User menu"
 *     >
 *       Open
 *     </button>
 *     <Dropdown
 *       label="User menu"
 *       isOpen={isOpen}
 *       trigger={<span>Trigger</span>}
 *       setState={setIsOpen}
 *     >
 *       <ul>
 *         <li>Test</li>
 *         <li>Test</li>
 *         <li>Test</li>
 *         <li>Test</li>
 *       </ul>
 *     </Dropdown>
 *   </div>
 * );
 * ```
 */

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    controls: { expanded: true },
    argTypes: {
      label: {
        control: "text",
        description: "Label for the dropdown button.",
        defaultValue: "Dropdown",
      },
      className: {
        control: "text",
        description: "Additional class names for styling.",
      },
      isOpen: {
        control: "boolean",
        description: "Control the state of the Dropdown open or close.",
        default: true,
      },
      trigger: {
        control: "jsx",
        description: "JSX element for the trigger button.",
        defaultValue: <span>Trigger</span>,
      },
      setState: {
        control: "function",
        description: "Callback to set the state of the Dropdown.",
        defaultValue: () => {},
      },
    },
  },
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
};

export default meta;

export const Basic = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Dropdown
        isOpen={isOpen}
        label="User menu"
        trigger={<span>Trigger</span>}
        setState={setIsOpen}
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
