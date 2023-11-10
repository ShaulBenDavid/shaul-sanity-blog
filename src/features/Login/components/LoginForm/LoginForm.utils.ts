import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required.",
    })
    .trim()
    .email("Not a valid email."),
  password: z
    .string({
      required_error: "Password is required.",
    })
    .trim()
    .min(1, "Password need to have at list 1 character."),
});
