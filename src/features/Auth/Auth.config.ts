import { z } from "zod";

const NAME_MAX_CHARACTERS_LENGTH = 32;

export const userSchemaValidation = {
  email: z
    .string({
      required_error: "Email is required",
    })
    .trim()
    .email("Not a valid email"),
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
  firstName: z
    .string({
      required_error: "First name is required",
    })
    .trim()
    .min(1)
    .max(NAME_MAX_CHARACTERS_LENGTH, "Last name can be long than 32 characters")
    .refine(
      (value) => /^[A-Za-z\s]*$/.test(value),
      "only english letters allowed",
    ),
  lastName: z
    .string({
      required_error: "Last name is required",
    })
    .trim()
    .min(1)
    .max(NAME_MAX_CHARACTERS_LENGTH, "Last name can be long than 32 characters")
    .refine(
      (value) => /^[A-Za-z\s]*$/.test(value),
      "only english letters allowed",
    ),
  username: z
    .string({
      required_error: "Username is required",
    })
    .trim()
    .min(1)
    .max(16, "Username can be long than 16 characters")
    .refine(
      (value) => /^[a-zA-Z0-9]+$/.test(value),
      "The string contains invalid characters. Only numbers and letters are allowed",
    ),
  interested: z
    .array(
      z.object({
        sanityId: z.string().trim().min(1),
        topic: z.string().trim().min(1).toLowerCase(),
      }),
    )
    .optional()
    .refine(
      (value) => value === undefined || value.length > 0,
      "Interested array must have at least one element",
    ),
};
