import { HTMLInputTypeAttribute } from 'react';

export enum RegisterStepsEnum {
  PERSONAL_INFO = 'personalInfo',
  ACCOUNT_INFO = 'accountInfo',
}

export type RegisterFieldType = {
  label: string;
  idFor: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
};
