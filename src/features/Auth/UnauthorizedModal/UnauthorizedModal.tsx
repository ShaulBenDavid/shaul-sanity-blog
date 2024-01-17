"use client";

import React, { useRef } from "react";
import { Modal } from "@/src/components/Modal";
// !! temp
// interface UnauthorizedModalProps {}

export const UnauthorizedModal = (): JSX.Element => {
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <Modal closeModal={() => modalRef.current?.close()} ref={modalRef}>
      <h2 className="text-center text-xl font-semibold">
        Whoops! It seems like you&apos;re not logged in.
      </h2>
      <p className="text-center">
        To continue, let&apos;s get you signed in or create a new account. 😊
      </p>
    </Modal>
  );
};
