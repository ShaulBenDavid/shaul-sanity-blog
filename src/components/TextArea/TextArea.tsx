"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  idFor: string;
  width?: string;
}

const TextArea = ({
  label,
  idFor,
  width,
  value,
  rows = 5,
  form,
  placeholder,
  className,
}: TextAreaProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="relative flex flex-col gap-1">
      <label
        htmlFor={idFor}
        className="font-medium capitalize text-secondary-950"
      >
        {label.replace(/([a-z])([A-Z])/g, "$1 $2")}
      </label>
      <textarea
        form={form}
        id={idFor}
        rows={rows}
        placeholder={placeholder}
        value={value}
        className={twMerge(
          `resize-none rounded-md border-[1px] border-secondary-950 bg-transparent px-2 text-secondary-950 placeholder:text-wizard-grey ${
            !!errors[idFor]?.message &&
            "border-red-500 focus:border-2 focus:border-red-500 focus:outline-none"
          }`,
          className,
        )}
        data-testid="textarea-component-test-id"
        style={{ width }}
        {...register(label)}
      />
      {!!errors[idFor]?.message && (
        <p className="absolute top-[100%] text-sm font-medium leading-4 text-red-500 first-letter:capitalize">
          {errors[idFor]?.message as string}
        </p>
      )}
    </div>
  );
};

export default TextArea;
