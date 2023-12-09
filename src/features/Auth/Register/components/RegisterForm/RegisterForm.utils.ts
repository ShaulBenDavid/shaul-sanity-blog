import { z } from "zod";
import { userSchemaValidation } from "../../../Auth.config";

export const personalInfoSchema = z.object({
  firstName: userSchemaValidation.firstName,
  lastName: userSchemaValidation.lastName,
  username: userSchemaValidation.username,
});

export const accountInfoSchema = z
  .object({
    email: userSchemaValidation.email,
    password: userSchemaValidation.password,
    confirmPassword: userSchemaValidation.password,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
