import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import type { AlertVariants } from "./Alert.types";
import { alertVariantsStyleConfig } from "./Alert.config";

interface AlertProps {
  variant: AlertVariants;
  content: string;
  width?: string;
  className?: string;
}

export const Alert = ({
  variant,
  content,
  width,
  className,
}: AlertProps): JSX.Element => (
  <div
    className={twMerge(
      `flex w-full flex-row items-center gap-2 rounded-lg p-4 text-sm ${alertVariantsStyleConfig[variant]}`,
      className,
    )}
    role="alert"
    style={{ width }}
    data-testid="alert-component-test-id"
  >
    <BsFillInfoCircleFill
      className="inline flex-shrink-0"
      aria-hidden="true"
      size={18}
      fill="currentColor"
    />
    <span className="sr-only">Info</span>
    <div className="line-clamp-2">
      <span className="font-medium capitalize">{variant}!</span> {content}
    </div>
  </div>
);
