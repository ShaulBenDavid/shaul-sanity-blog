import React from "react";
import Divider from "@/src/components/Divider";
import SocialLogin from "./components/SocialLogin";
import LoginForm from "./components/LoginForm";
import LoginFooter from "./components/LoginFooter";
import { AuthLayout } from "../components/AuthLayout";
import { AuthHeader } from "../components/AuthHeader";

const Login = () => {
  return (
    <AuthLayout className="justify-between">
      <>
        <AuthHeader
          title="Welcome to Dev Wizard"
          content="Join our community and explore the tech every day."
        />
        <SocialLogin />
        <Divider title="or" />
        <LoginForm />
        <LoginFooter />
      </>
    </AuthLayout>
  );
};

export default Login;
