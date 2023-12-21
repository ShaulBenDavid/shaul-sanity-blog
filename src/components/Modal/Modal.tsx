"use client";

import React, { type ForwardedRef, forwardRef } from "react";

interface ModalProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  closeModal: () => void;
}

export const Modal = forwardRef(
  (
    { closeModal, children }: ModalProps,
    ref: ForwardedRef<HTMLDialogElement>,
  ): JSX.Element => (
    <dialog onCancel={closeModal} ref={ref} className="focus:outline-none">
      {children}
    </dialog>
  ),
);
