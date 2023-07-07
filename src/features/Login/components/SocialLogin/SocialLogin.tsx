import React from 'react';
import { socialsLoginButtonsConfig } from '../../Login.config';
import SocialButton from './SocialButton';

const SocialLogin = (): JSX.Element => (
  <div className="flex flex-row gap-4">
    {socialsLoginButtonsConfig.map(({ borderColor, children }) => (
      <SocialButton borderColor={borderColor} key={borderColor}>
        {children}
      </SocialButton>
    ))}
  </div>
);

export default SocialLogin;
