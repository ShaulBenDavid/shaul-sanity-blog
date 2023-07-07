import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  idFor: string;
  width?: string;
  error?: string;
}

const Input = ({
  label,
  idFor,
  width,
  error,
  type,
  value,
  placeholder,
  className,
  onChange,
}: InputProps): JSX.Element => (
  <div className="relative flex flex-col gap-1">
    <label htmlFor={idFor} className="font-medium capitalize text-secondary">
      {label}
    </label>
    <input
      id={idFor}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={twMerge(
        `bg-transparent h-10 rounded-md border-[1px] border-secondary px-2 text-secondary placeholder:text-wizard-grey ${
          !!error &&
          'border-red focus:border-2 focus:border-red focus:outline-none'
        }`,
        className
      )}
      style={{ width }}
    />
    {!!error && (
      <p className="absolute top-16 font-medium text-red first-letter:capitalize">
        {error}
      </p>
    )}
  </div>
);

export default Input;
