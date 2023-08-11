'use client';

import React from 'react';
import { RegisterPayloadType } from '@/src/api/auth';
import PersonalInfo from './PersonalInfo';
import { RegisterStepsEnum } from '../../Register.types';
import { registerFormsFieldsConfig } from '../../Register.config';
import AccountInfo from './AccountInfo';
import { useMultiFormConfig } from './useMultiFormConfig';

interface RegisterFormProps {
  currentStep: number;
  backStep: () => void;
  onSubmit: (data: Partial<RegisterPayloadType>) => void;
}

const RegisterForm = ({
  currentStep,
  backStep,
  onSubmit,
}: RegisterFormProps): JSX.Element => {
  const methods = useMultiFormConfig();

  const getForms: JSX.Element[] = [
    <PersonalInfo
      method={methods[RegisterStepsEnum.PERSONAL_INFO]}
      onClick={onSubmit}
      fields={registerFormsFieldsConfig[RegisterStepsEnum.PERSONAL_INFO]}
    />,
    <AccountInfo
      method={methods[RegisterStepsEnum.ACCOUNT_INFO]}
      goBack={backStep}
      onClick={onSubmit}
      fields={registerFormsFieldsConfig[RegisterStepsEnum.ACCOUNT_INFO]}
    />,
  ];

  return <>{getForms[currentStep - 1]}</>;
};

export default RegisterForm;
