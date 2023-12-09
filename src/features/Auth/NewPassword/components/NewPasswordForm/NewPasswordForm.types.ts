import { type PostNewPasswordPayloadType } from "@/src/api/auth";

export type NewPasswordFormPayloadType = PostNewPasswordPayloadType & {
  confirmPassword: string;
};
