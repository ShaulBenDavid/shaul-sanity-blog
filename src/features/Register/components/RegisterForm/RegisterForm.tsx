'use client';

import React from 'react';
import { useMultiFormConfig, useMultiFormSteps } from './hooks';
import PersonalInfo from './PersonalInfo';
import { RegisterStepsEnum } from '../../Register.types';
import { getFormsFieldsConfig } from '../../Register.config';
import AccountInfo from './AccountInfo';

// interface RegisterFormProps {}

const RegisterForm = (): JSX.Element => {
  const methods = useMultiFormConfig();
  const { currentStep, onSubmit } = useMultiFormSteps(
    Object.keys(methods).length
  );

  const getForms: JSX.Element[] = [
    <PersonalInfo
      method={methods[RegisterStepsEnum.PERSONAL_INFO]}
      onClick={onSubmit}
      fields={getFormsFieldsConfig[RegisterStepsEnum.PERSONAL_INFO]}
    />,
    <AccountInfo
      method={methods[RegisterStepsEnum.ACCOUNT_INFO]}
      onClick={onSubmit}
      fields={getFormsFieldsConfig[RegisterStepsEnum.ACCOUNT_INFO]}
    />,
  ];

  return <>{getForms[currentStep]}</>;
};

export default RegisterForm;
