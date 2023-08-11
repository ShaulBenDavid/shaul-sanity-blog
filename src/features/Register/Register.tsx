'use client';

import React, { useEffect } from 'react';
import { useSignUp } from '@/src/api/auth/hooks';
import Alert, { AlertVariants } from '@/src/components/Alert';
import Stepper from './components/Stepper';
import { registerStepsConfig } from './Register.config';
import RegisterForm from './components/RegisterForm';
import { RegisterStepsEnum } from './Register.types';
import { useMultiFormSteps } from './useMultiFormSteps';

const CONFIRMATION_PAGE = 1;

const Register = (): JSX.Element => {
  const {
    isSignUpLoading,
    isSignUpError,
    isSignUpSuccess,
    signUpError,
    handleSignUp,
  } = useSignUp();

  const stepsCount =
    Object.keys(RegisterStepsEnum).length +
    (isSignUpSuccess ? CONFIRMATION_PAGE : 0);

  const { currentStep, backStep, nextStep, onSubmit } = useMultiFormSteps({
    stepsCount,
    handleSubmit: handleSignUp,
  });

  useEffect(() => {
    if (isSignUpSuccess) {
      nextStep();
    }
  }, [isSignUpSuccess, nextStep]);

  return (
    <div className="my-8 flex h-[608px] w-[612px] flex-col rounded-md p-4 shadow-container max-tb:max-w-[612px] max-sm:h-[700px] sm:p-8">
      <Stepper currentStep={currentStep} steps={registerStepsConfig} />
      <div className="flex flex-col gap-1 pb-4 pt-4">
        <h1 className="text-center text-xl font-bold">Sign Up to Dev Wizard</h1>
        <p className="text-center">
          Join our community and explore the tech every day.
        </p>
      </div>
      {isSignUpError && (
        <Alert
          variant={AlertVariants.DANGER}
          content={signUpError?.response?.data.message}
        />
      )}
      <RegisterForm
        currentStep={currentStep}
        isLoading={isSignUpLoading}
        backStep={backStep}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Register;
