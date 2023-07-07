import React from 'react';
import SocialLogin from './components/SocialLogin';

const Login = () => {
  return (
    <div className="flex h-[608px] max-w-[612px] flex-col justify-between rounded-md p-8 shadow-container">
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-xl font-bold">Welcome to Dev Wizard</h1>
        <p className="text-center">
          Join our community and explore the tech every day.
        </p>
      </div>
      <SocialLogin />
    </div>
  );
};

export default Login;
