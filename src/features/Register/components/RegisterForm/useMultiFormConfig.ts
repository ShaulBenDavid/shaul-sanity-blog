'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { accountInfoSchema, personalInfoSchema } from './RegisterForm.utils';
import { AccountMethodType, PersonalMethodType } from './RegisterForm.types';
import { RegisterStepsEnum } from '../../Register.types';

export const useMultiFormConfig = () => {
  const personalMethod = useForm<PersonalMethodType>({
    resolver: zodResolver(personalInfoSchema),
    mode: 'onTouched',
  });

  const accountMethod = useForm<AccountMethodType>({
    resolver: zodResolver(accountInfoSchema),
    mode: 'onChange',
    delayError: 1000,
  });

  return {
    [RegisterStepsEnum.PERSONAL_INFO]: personalMethod,
    [RegisterStepsEnum.ACCOUNT_INFO]: accountMethod,
  };
};
