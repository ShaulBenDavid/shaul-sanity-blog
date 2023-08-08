import React from 'react';
import Stepper from './components/Stepper';
import { registerStepsConfig } from './Register.config';

const Register = (): JSX.Element => (
  <div className="my-8 flex h-[608px] w-[612px] flex-col justify-between rounded-md p-4 shadow-container max-tb:max-w-[612px] max-sm:h-[700px] sm:p-8">
    <Stepper currentStep={2} steps={registerStepsConfig} />
    <div className="flex flex-col gap-2">
      <h1 className="text-center text-xl font-bold">Sign Up to Dev Wizard</h1>
      <p className="text-center">
        Join our community and explore the tech every day.
      </p>
    </div>
  </div>
);

export default Register;
