import { AlertVariants } from "./Alert.types";

export const alertVariantsStyleConfig: Record<AlertVariants, string> = {
  [AlertVariants.INFO]: "text-blue-800 bg-blue-50",
  [AlertVariants.DANGER]: "text-red-800 bg-red-50",
  [AlertVariants.WARNING]: "text-yellow-800 bg-yellow-50",
  [AlertVariants.SUCCESS]: "text-green-800 bg-green-50",
};
