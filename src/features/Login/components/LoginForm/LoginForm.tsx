import React from 'react';
import Input from '@/src/components/Input';
import { loginFormConfig } from './LoginForm.config';
import Button, { ButtonVariants } from '@/src/components/Button';

const LoginForm = (): JSX.Element => (
  <form className="flex flex-col">
    {loginFormConfig.map(({ label, idFor }) => (
      <Input label={label} idFor={idFor} className="mb-4" />
    ))}
    <Button variant={ButtonVariants.PRIMARY} type="submit" className="mt-2">
      continue
    </Button>
  </form>
);

export default LoginForm;
