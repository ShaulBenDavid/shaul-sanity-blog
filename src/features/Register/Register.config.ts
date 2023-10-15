import type { RegisterFieldType } from './Register.types';
import { RegisterStepsEnum } from './Register.types';
import type { StepsType } from './components/Stepper';

export const registerStepsConfig: StepsType = [
  {
    title: 'personal',
    subtitle: 'info',
  },
  {
    title: 'account',
    subtitle: 'info',
  },
  {
    title: 'confirmation',
  },
];

const personalInfoInputs: RegisterFieldType[] = [
  {
    label: 'firstName',
    idFor: 'firstName',
    placeholder: 'Enter your name',
    type: 'text',
  },
  {
    label: 'lastName',
    idFor: 'lastName',
    placeholder: 'Enter your name',
    type: 'text',
  },
  {
    label: 'username',
    idFor: 'username',
    placeholder: 'Example123',
    type: 'text',
  },
];

const accountInfoInputs: RegisterFieldType[] = [
  {
    label: 'email',
    idFor: 'email',
    placeholder: 'Example@example.com',
    type: 'text',
  },

  {
    label: 'password',
    idFor: 'password',
    placeholder: 'Enter your password',
    type: 'password',
  },
  {
    label: 'confirmPassword',
    idFor: 'confirmPassword',
    placeholder: 'Enter your password',
    type: 'password',
  },
];

export const registerFormsFieldsConfig: Record<
  RegisterStepsEnum,
  RegisterFieldType[]
> = {
  [RegisterStepsEnum.PERSONAL_INFO]: personalInfoInputs,
  [RegisterStepsEnum.ACCOUNT_INFO]: accountInfoInputs,
};
