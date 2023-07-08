'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

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

  return (
    <div className="relative flex flex-col gap-1">
      <label htmlFor={idFor} className="font-medium capitalize text-secondary">
        {label}
      </label>
      <input
        id={idFor}
        type={type}
        placeholder={placeholder}
        value={value}
        className={twMerge(
          `bg-transparent h-10 rounded-md border-[1px] border-secondary px-2 text-secondary placeholder:text-wizard-grey ${
            !!errors[idFor]?.message &&
            'border-red focus:border-2 focus:border-red focus:outline-none'
          }`,
          className
        )}
        style={{ width }}
        {...register(label)}
      />
      {!!errors[idFor]?.message && (
        <p className="absolute top-[68px] text-sm font-medium leading-4 text-red first-letter:capitalize">
          {errors[idFor]?.message as string}
        </p>
      )}
    </div>
  );
};

export default Input;
