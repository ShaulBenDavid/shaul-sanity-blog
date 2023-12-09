import { z } from "zod";
import { userSchemaValidation } from "../../../Auth.config";

export const NewPasswordSchema = z
  .object({
    password: userSchemaValidation.password,
    confirmPassword: userSchemaValidation.password,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
