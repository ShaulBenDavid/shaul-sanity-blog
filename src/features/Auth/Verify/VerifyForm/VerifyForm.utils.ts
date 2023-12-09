import { z } from "zod";
import { userSchemaValidation } from "../../Auth.config";

export const VerifySchema = z.object({
  email: userSchemaValidation.email,
});
