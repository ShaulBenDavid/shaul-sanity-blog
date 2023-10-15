'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import type { RegisterPayloadType } from '@/src/api/auth';
import Spinner from '@/src/components/Spinner/index';
import { useMultiFormConfig } from './useMultiFormConfig';
import { registerFormsFieldsConfig } from '../../Register.config';
import { RegisterStepsEnum } from '../../Register.types';
import PersonalInfo from './PersonalInfo';
import AccountInfo from './AccountInfo';

const Confirmation = dynamic(() => import('./Confirmation'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <Spinner />
    </div>
  ),
});

interface RegisterFormProps {
  currentStep: number;
  isLoading: boolean;
  backStep: () => void;
  onSubmit: (data: Partial<RegisterPayloadType>) => void;
}

const RegisterForm = ({
  currentStep,
  isLoading,
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
      isLoading={isLoading}
      goBack={backStep}
      onClick={onSubmit}
      fields={registerFormsFieldsConfig[RegisterStepsEnum.ACCOUNT_INFO]}
    />,
    <Confirmation />,
  ];

  return getForms[currentStep - 1];
};

export default RegisterForm;
