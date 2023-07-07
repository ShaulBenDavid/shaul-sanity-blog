import React from 'react';
import Divider from '@/src/components/Divider';
import SocialLogin from './components/SocialLogin';
import LoginForm from './components/LoginForm';
import LoginFooter from './components/LoginFooter';

const Login = () => {
  return (
    <div className="flex h-[608px] w-[612px] flex-col justify-between rounded-md p-8 shadow-container">
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-xl font-bold">Welcome to Dev Wizard</h1>
        <p className="text-center">
          Join our community and explore the tech every day.
        </p>
      </div>
      <SocialLogin />
      <Divider title="or" />
      <LoginForm />
      <LoginFooter />
    </div>
  );
};

export default Login;
