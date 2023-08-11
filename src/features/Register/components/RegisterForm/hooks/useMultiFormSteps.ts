'use client';

import { useCallback, useState } from 'react';

export const useMultiFormSteps = (forms: JSX.Element[]) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const nextStep = useCallback((): void => {
    if (currentStep < forms.length) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [setCurrentStep]);

  const backStep = useCallback((): void => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [setCurrentStep]);

  return {
    form: forms[currentStep],
    nextStep,
    backStep,
    currentStep,
  };
};
