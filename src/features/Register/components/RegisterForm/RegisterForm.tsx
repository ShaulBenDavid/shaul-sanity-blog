'use client';

import React from 'react';
import { useMultiFormConfig, useMultiFormSteps } from './hooks';
import PersonalInfo from './PersonalInfo';
import { RegisterStepsEnum } from '../../Register.types';
import { registerFormsFieldsConfig } from '../../Register.config';
import AccountInfo from './AccountInfo';

// interface RegisterFormProps {}

const RegisterForm = (): JSX.Element => {
  const methods = useMultiFormConfig();
  const { currentStep, onSubmit, backStep } = useMultiFormSteps(
    Object.keys(methods).length
  );

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
