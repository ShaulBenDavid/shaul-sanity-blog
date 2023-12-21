import React, { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import type { Meta } from "@storybook/react";
import { Modal } from "./Modal";

const styles: CSSProperties = {
  transform: "scale(1)",
  height: "40vh",
  position: "relative",
};

/**
 * # The Modal component
 * The Modal component is a reusable UI element that takes in children to display its content,
 */

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
  argTypes: {
    onClose: {
      control: "ControlType",
      description: "Close the modal onClick out of the modal range.",
      defaultValue: () => ({}),
    },
    ref: {
      control: "string",
      description: "Forward ref to control the Modal",
    },
  },
};

export default meta;

export const Basic = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    modalRef.current?.showModal();
  }, []);

  return (
    <Modal closeModal={() => modalRef.current?.close()} ref={modalRef}>
      <ul>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
      </ul>
    </Modal>
  );
};
