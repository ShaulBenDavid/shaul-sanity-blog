import React from 'react';
import { ButtonVariants } from './Button.types';
import { buttonVariantsConfig } from './Button.config';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
  width?: string;
  isLoading?: boolean;
}

const Button = ({
  variant,
  width,
  isLoading,
  children,
  type = 'submit',
  onClick,
  disabled,
}: ButtonProps): JSX.Element => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled || isLoading}
    className={`h-10 w-full rounded-md text-base capitalize ${
      buttonVariantsConfig[variant]
    } ${isLoading && 'cursor-wait'}`}
    style={{ width }}
  >
    {children}
  </button>
);

export default Button;
