"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { useFormContext } from "react-hook-form";
import { camelCaseToWords } from "@/src/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  idFor: string;
  width?: string;
}

const Input = ({
  label,
  idFor,
  width,
  type,
  value,
  placeholder,
  className,
}: InputProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[idFor]?.message;

  return (
    <div className="relative flex flex-col gap-1">
      <label
        htmlFor={idFor}
        className="font-medium capitalize text-secondary-950"
      >
        {camelCaseToWords(label)}
      </label>
      <input
        id={idFor}
        type={type}
        placeholder={placeholder}
        value={value}
        className={twMerge(
          `h-10 rounded-md border-[1px] border-secondary-950 bg-transparent px-2 text-secondary-950 placeholder:text-wizard-grey ${
            !!errorMessage &&
            "border-red-500 focus:border-2 focus:border-red-500 focus:outline-none"
          }`,
          className,
        )}
        style={{ width }}
        {...register(label)}
      />
      {!!errorMessage && (
        <p className="absolute top-[68px] text-sm font-medium leading-4 text-red-500 first-letter:capitalize">
          {errorMessage as string}
        </p>
      )}
    </div>
  );
};

export default Input;
