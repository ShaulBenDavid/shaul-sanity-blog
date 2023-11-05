import { z } from 'zod';
import { ContactTypesEnum } from '@/src/api/contact';
import { NAME_MAX_CHARACTERS_LENGTH } from '@/src/constant/common';

const SubjectTypeEnum = z.enum([
  ContactTypesEnum.BUG_REPORT,
  ContactTypesEnum.COLLABORATION,
  ContactTypesEnum.HELP,
  ContactTypesEnum.OTHER,
  ContactTypesEnum.USER_ISSUE,
]);

export const contactSchemaValidation = z
  .object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .trim()
      .email('Not a valid email'),
    name: z
      .string({
        required_error: 'Name is required',
      })
      .trim()
      .min(1)
      .max(NAME_MAX_CHARACTERS_LENGTH, 'Name can be long than 32 characters')
      .refine(
        (value) => /^[A-Za-z\s]*$/.test(value),
        'only english letters allowed'
      ),
    subject: z
      .string({
        required_error: 'Subject is required',
      })
      .trim()
      .min(1)
      .max(255),
    content: z
      .string({
        required_error: 'Content is required',
      })
      .trim()
      .min(1)
      .max(255),
    subjectType: SubjectTypeEnum,
  })
  .strict();
