import { HTMLInputTypeAttribute } from 'react';

type LoginFormConfig = {
  label: string;
  idFor: string;
  type: HTMLInputTypeAttribute;
};

export const loginFormConfig: LoginFormConfig[] = [
  {
    label: 'email',
    idFor: 'email',
    type: 'text',
  },
  {
    label: 'password',
    idFor: 'password',
    type: 'password',
  },
];
