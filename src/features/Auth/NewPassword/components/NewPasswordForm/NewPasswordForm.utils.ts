import { z } from "zod";

export const NewPasswordSchema = z
  .object({
    password: z
      .string({
        required_error: "Password is required",
      })
      .trim()
      .min(8, "Password need to have at list 8 characters")
      .max(16, "password cannot contain more than 16 characters")
      .refine(
        (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value),
        "Minimum eight characters, at least one letter and one number",
      ),
    confirmPassword: z
      .string({
        required_error: "Password is required",
      })
      .trim()
      .min(8, "Password need to have at list 8 characters")
      .max(16, "password cannot contain more than 16 characters")
      .refine(
        (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value),
        "Minimum eight characters, at least one letter and one number",
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
