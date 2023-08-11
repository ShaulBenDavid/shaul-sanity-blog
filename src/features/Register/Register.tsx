'use client';

import React from 'react';
import Stepper from './components/Stepper';
import { registerStepsConfig } from './Register.config';
import RegisterForm from './components/RegisterForm';
import { RegisterStepsEnum } from './Register.types';
import { useMultiFormSteps } from './useMultiFormSteps';

const Register = (): JSX.Element => {
  const { currentStep, backStep, onSubmit } = useMultiFormSteps(
    Object.keys(RegisterStepsEnum).length
  );

  return (
    <div className="my-8 flex h-[608px] w-[612px] flex-col rounded-md p-4 shadow-container max-tb:max-w-[612px] max-sm:h-[700px] sm:p-8">
      <Stepper currentStep={currentStep} steps={registerStepsConfig} />
      <div className="flex flex-col gap-1 pt-4">
        <h1 className="text-center text-xl font-bold">Sign Up to Dev Wizard</h1>
        <p className="text-center">
          Join our community and explore the tech every day.
        </p>
      </div>
      <RegisterForm
        currentStep={currentStep}
        backStep={backStep}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Register;
