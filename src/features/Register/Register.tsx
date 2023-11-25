"use client";

import React, { useEffect } from "react";
import { useSignUp } from "@/src/api/auth/hooks";
import Alert, { AlertVariants } from "@/src/components/Alert";
import Stepper from "./components/Stepper";
import { registerStepsConfig } from "./Register.config";
import RegisterForm from "./components/RegisterForm";
import { RegisterStepsEnum } from "./Register.types";
import { useMultiFormSteps } from "./useMultiFormSteps";
import { Header } from "./components/Header";

const CONFIRMATION_PAGE = 1;

const Register = (): JSX.Element => {
  const {
    isSignUpLoading,
    isSignUpError,
    isSignUpSuccess,
    signUpError,
    handleSignUp,
  } = useSignUp();

  const stepsCount: number =
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
      {currentStep < 3 && <Header />}
      {isSignUpError && (
        <Alert
          variant={AlertVariants.DANGER}
          content={signUpError?.response?.data.message}
          className="mb-4"
        />
      )}
      <RegisterForm
        currentStep={currentStep}
        isSignUpLoading={isSignUpLoading}
        backStep={backStep}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Register;
