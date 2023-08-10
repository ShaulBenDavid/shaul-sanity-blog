import { z } from 'zod';

const NAME_MAX_LENGTH = 32;

export const PersonalInfoSchema = z.object({
  firstName: z
    .string({
      required_error: 'First name is required',
    })
    .trim()
    .min(1)
    .max(NAME_MAX_LENGTH, 'Last name can be long than 32 characters')
    .refine(
      (value) => /^[A-Za-z\s]*$/.test(value),
      'only english letters allowed'
    ),
  lastName: z
    .string({
      required_error: 'Last name is required',
    })
    .trim()
    .min(1)
    .max(NAME_MAX_LENGTH, 'Last name can be long than 32 characters')
    .refine(
      (value) => /^[A-Za-z\s]*$/.test(value),
      'only english letters allowed'
    ),
});
