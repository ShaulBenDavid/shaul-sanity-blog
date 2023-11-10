'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { accountInfoSchema, personalInfoSchema } from './RegisterForm.utils';
import type {
  AccountMethodType,
  PersonalMethodType,
} from './RegisterForm.types';
import { RegisterStepsEnum } from '../../Register.types';

export const useMultiFormConfig = () => ({
  [RegisterStepsEnum.PERSONAL_INFO]: useForm<PersonalMethodType>({
    resolver: zodResolver(personalInfoSchema),
    mode: 'onTouched',
  }),
  [RegisterStepsEnum.ACCOUNT_INFO]: useForm<AccountMethodType>({
    resolver: zodResolver(accountInfoSchema),
    mode: 'onChange',
    delayError: 1000,
  }),
});
