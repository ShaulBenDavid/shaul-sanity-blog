import React from "react";
import Divider from "@/src/components/Divider";
import SocialLogin from "./components/SocialLogin";
import LoginForm from "./components/LoginForm";
import LoginFooter from "./components/LoginFooter";
import { AuthLayout } from "../components/AuthLayout";

const Login = () => {
  return (
    <AuthLayout className="justify-between">
      <>
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-xl font-bold">
            Welcome to Dev Wizard
          </h1>
          <p className="text-center">
            Join our community and explore the tech every day.
          </p>
        </div>
        <SocialLogin />
        <Divider title="or" />
        <LoginForm />
        <LoginFooter />
      </>
    </AuthLayout>
  );
};

export default Login;
