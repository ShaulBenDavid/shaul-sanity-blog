import { z } from "zod";
import { userSchemaValidation } from "../../../Auth.config";

export const LoginSchema = z.object({
  email: userSchemaValidation.email,
  password: userSchemaValidation.password,
});
