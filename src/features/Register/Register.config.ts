import { RegisterFieldType, RegisterStepsEnum } from './Register.types';
import { StepsType } from './components/Stepper';

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
    type: 'text',
  },
  {
    label: 'lastName',
    idFor: 'lastName',
    type: 'text',
  },
];

const accountInfoInputs: RegisterFieldType[] = [
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
  {
    label: 'confirmPassword',
    idFor: 'confirmPassword',
    type: 'password',
  },
];

export const getFormsFieldsConfig = {
  [RegisterStepsEnum.PERSONAL_INFO]: personalInfoInputs,
  [RegisterStepsEnum.ACCOUNT_INFO]: accountInfoInputs,
};
