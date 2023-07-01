import React from 'react';
import { ButtonVariants } from './Button.types';
import { buttonVariantsConfig } from './Button.config';
import Spinner, { SpinnerSize, SpinnerVariants } from '../Spinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
  width?: string;
  isLoading?: boolean;
}

const Button = ({
  variant,
  width,
  isLoading = false,
  children,
  type = 'submit',
  onClick,
  disabled,
}: ButtonProps): JSX.Element => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled || isLoading}
    className={`flex h-10 w-full items-center justify-center rounded-md text-base capitalize ${
      buttonVariantsConfig[variant]
    } ${isLoading && 'cursor-wait'} disabled:opacity-60`}
    style={{ width }}
  >
    {isLoading ? (
      <Spinner
        size={SpinnerSize.SMALL}
        variant={
          variant === ButtonVariants.PRIMARY
            ? SpinnerVariants.WHITE
            : SpinnerVariants.PRIMARY
        }
      />
    ) : (
      children
    )}
  </button>
);

export default Button;
