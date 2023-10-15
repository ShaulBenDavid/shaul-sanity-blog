import type { RegisterPayloadType } from '@/src/api/auth';

export type PersonalMethodType = Pick<
  RegisterPayloadType,
  'firstName' | 'lastName' | 'username'
>;

export type AccountMethodType = Pick<
  RegisterPayloadType,
  'password' | 'email'
> & {
  confirmPassword: string;
};
