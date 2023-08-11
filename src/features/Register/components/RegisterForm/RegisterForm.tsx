'use client';

import React from 'react';
import { useMultiFormConfig, useMultiFormSteps } from './hooks';
import PersonalInfo from './PersonalInfo';
import { RegisterStepsEnum } from '../../Register.types';

// interface RegisterFormProps {}

const RegisterForm = (): JSX.Element => {
  const methods = useMultiFormConfig();
  const { form } = useMultiFormSteps([
    <PersonalInfo method={methods[RegisterStepsEnum.PERSONAL_INFO]} />,
  ]);

  return <>{form}</>;
};

export default RegisterForm;
