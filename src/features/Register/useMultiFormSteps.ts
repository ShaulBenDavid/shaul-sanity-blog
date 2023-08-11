'use client';

import { useCallback, useState } from 'react';
import { RegisterPayloadType } from '@/src/api/auth';

export const useMultiFormSteps = (length: number) => {
  const [credentials, setCredentials] = useState<RegisterPayloadType>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
  const [currentStep, setCurrentStep] = useState<number>(1);

  const nextStep = useCallback((): void => {
    if (currentStep < length) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, length]);

  const backStep = useCallback((): void => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const onSubmit = useCallback(
    (data: Partial<RegisterPayloadType>): void => {
      setCredentials((prev) => ({ ...prev, data }));
      if (currentStep === length) {
        // handleSubmit()
        return;
      }
      nextStep();
    },
    [currentStep, length, nextStep]
  );

  return {
    nextStep,
    backStep,
    currentStep,
    onSubmit,
    credentials,
  };
};
