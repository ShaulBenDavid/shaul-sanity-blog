import React from 'react';

interface SocialButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  borderColor?: string;
}

const SocialButton = ({
  width,
  borderColor,
  children,
  disabled,
  type,
  onClick,
}: SocialButtonProps): JSX.Element => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className="bg-transparent flex h-10 w-full flex-row items-center justify-center gap-1 rounded-md border-2 font-medium capitalize text-wizard-black hover:enabled:bg-light-purple
    hover:enabled:bg-opacity-10
    disabled:opacity-60"
    style={{ width, borderColor }}
  >
    {children}
  </button>
);

export default SocialButton;
