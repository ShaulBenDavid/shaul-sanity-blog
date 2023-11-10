import type { HTMLInputTypeAttribute } from "react";

type LoginFormConfig = {
  label: string;
  idFor: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
};

export const loginFormConfig: LoginFormConfig[] = [
  {
    label: "email",
    idFor: "email",
    placeholder: "Example@example.com",
    type: "text",
  },
  {
    label: "password",
    idFor: "password",
    placeholder: "Enter your password",
    type: "password",
  },
];
