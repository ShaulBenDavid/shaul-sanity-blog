"use client";

import { useCallback, useState } from "react";
import type { RegisterPayloadType } from "@/src/api/auth";

interface UseMultiFormSteps {
  stepsCount: number;
  handleSubmit: (payload: RegisterPayloadType) => void;
}

const initialState: RegisterPayloadType = {
  firstName: "asd",
  lastName: "asd",
  username: "asd",
  email: "asd@asd.com",
  password: "asdasd",
};

export const useMultiFormSteps = ({
  stepsCount,
  handleSubmit,
}: UseMultiFormSteps) => {
  const [credentials, setCredentials] =
    useState<RegisterPayloadType>(initialState);
  const [currentStep, setCurrentStep] = useState<number>(3);

  const nextStep = useCallback((): void => {
    if (currentStep < stepsCount) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, stepsCount]);

  const backStep = useCallback((): void => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const onSubmit = useCallback(
    (data: Partial<RegisterPayloadType>): void => {
      setCredentials((prev) => ({ ...prev, ...data }));
      if (currentStep === stepsCount) {
        handleSubmit({ ...credentials, ...data });
        return;
      }
      nextStep();
    },
    [credentials, currentStep, handleSubmit, stepsCount, nextStep],
  );

  return {
    nextStep,
    backStep,
    currentStep,
    onSubmit,
    credentials,
  };
};
