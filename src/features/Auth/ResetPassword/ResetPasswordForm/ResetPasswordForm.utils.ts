import { z } from "zod";
import { userSchemaValidation } from "../../Auth.config";

export const ResetPasswordSchema = z.object({
  email: userSchemaValidation.email,
});
