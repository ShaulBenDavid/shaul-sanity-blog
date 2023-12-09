import { z } from "zod";

export const ResetPasswordSchema = z.object({
  email: z
    .string({
      required_error: "Email is required.",
    })
    .trim()
    .email("Not a valid email."),
});
