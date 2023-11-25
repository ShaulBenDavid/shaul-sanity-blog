"use client";

import React, { type FormEvent, useEffect } from "react";
import { toast } from "react-toastify";
import { usePostActive, useSignUp } from "@/src/api/auth/hooks";
import Alert, { AlertVariants } from "@/src/components/Alert";
import Stepper from "./components/Stepper";
import { registerStepsConfig } from "./Register.config";
import RegisterForm from "./components/RegisterForm";
import { RegisterStepsEnum } from "./Register.types";
import { useMultiFormSteps } from "./useMultiFormSteps";
import { AuthHeader } from "../components/AuthHeader";
import { AuthLayout } from "../components/AuthLayout";

const CONFIRMATION_PAGE_COUNT = 1;

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
    (isSignUpSuccess ? CONFIRMATION_PAGE_COUNT : 0);

  const { currentStep, backStep, nextStep, onSubmit, credentials } =
    useMultiFormSteps({
      stepsCount,
      handleSubmit: handleSignUp,
    });

  const handleResendSuccess = (): void => {
    toast.success("Verification email sent successfully!", {
      position: toast.POSITION.TOP_LEFT,
      role: "alert",
      pauseOnFocusLoss: true,
    });
  };

  const handleResendFail = (): void => {
    toast.error("Some error occurred, please try again later...", {
      position: toast.POSITION.TOP_LEFT,
      role: "alert",
      pauseOnFocusLoss: true,
    });
  };

  const { postActive, isPostActiveLoading } = usePostActive({
    handleSuccess: handleResendSuccess,
    handleError: handleResendFail,
  });

  const handleResendActivation = (e: FormEvent): void => {
    e.preventDefault();
    postActive({ email: credentials.email });
  };

  useEffect(() => {
    if (isSignUpSuccess) {
      nextStep();
    }
  }, [isSignUpSuccess, nextStep]);

  return (
    <AuthLayout>
      <>
        <Stepper currentStep={currentStep} steps={registerStepsConfig} />
        {currentStep < 3 && (
          <AuthHeader
            title="Sign Up to Dev Wizard"
            content="Join our community and explore the tech every day."
            className="pb-4 pt-4"
          />
        )}
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
          isPostActiveLoading={isPostActiveLoading}
          backStep={backStep}
          onSubmit={onSubmit}
          handleResendActivation={handleResendActivation}
        />
      </>
    </AuthLayout>
  );
};

export default Register;
