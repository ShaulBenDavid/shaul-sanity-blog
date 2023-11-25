import { z } from "zod";

export const VerifySchema = z.object({
  email: z
    .string({
      required_error: "Email is required.",
    })
    .trim()
    .email("Not a valid email."),
});
