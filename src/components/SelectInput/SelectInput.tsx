"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { Controller, useFormContext } from "react-hook-form";
import { camelCaseToWords } from "@/src/utils";

interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  idFor: string;
  width?: string;
  options: string[];
}

export const SelectInput = ({
  label,
  idFor,
  width,
  form,
  className,
  options,
}: SelectInputProps): JSX.Element => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[label]?.message;

  return (
    <div className="relative flex flex-col gap-1">
      <label
        htmlFor={idFor}
        className="font-medium capitalize text-secondary-950"
      >
        {camelCaseToWords(label)}
      </label>
      <Controller
        name={label}
        control={control}
        render={({ field }) => (
          <select
            form={form}
            id={idFor}
            className={twMerge(
              `h-10 resize-none rounded-md border-[1px] border-secondary-950 bg-transparent px-2 text-secondary-950 placeholder:text-wizard-grey ${
                !!errorMessage &&
                "border-red-500 focus:border-2 focus:border-red-500 focus:outline-none"
              }`,
              className,
            )}
            data-testid="selectinput-component-test-id"
            style={{ width }}
            {...field}
          >
            <option value="">Please select</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {camelCaseToWords(option)}
              </option>
            ))}
          </select>
        )}
      />
      {!!errorMessage && (
        <p className="absolute top-[68px] text-sm font-medium leading-4 text-red-500 first-letter:capitalize">
          {errorMessage as string}
        </p>
      )}
    </div>
  );
};
