import React from 'react';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { AlertVariants } from './Alert.types';
import { alertVariantsStyleConfig } from './Alert.config';

interface AlertProps {
  variant: AlertVariants;
  content: string;
  width?: string;
}

const Alert = ({ variant, content, width }: AlertProps): JSX.Element => (
  <div
    className={`mb-4 flex w-full flex-row items-center gap-2 rounded-lg p-4 text-sm ${alertVariantsStyleConfig[variant]}`}
    role="alert"
    style={{ width }}
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

export default Alert;
