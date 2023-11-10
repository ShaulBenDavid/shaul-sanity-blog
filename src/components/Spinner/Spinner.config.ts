import { SpinnerSize, SpinnerVariants } from "./Spinner.types";

export const spinnerSizesConfig: Record<SpinnerSize, string> = {
  [SpinnerSize.LARGE]: "h-8 w-8",
  [SpinnerSize.MEDIUM]: "h-6 w-6",
  [SpinnerSize.SMALL]: "h-4 w-4",
};
export const spinnerVariantConfig: Record<SpinnerVariants, string> = {
  [SpinnerVariants.PRIMARY]: "fill-primary-900",
  [SpinnerVariants.WHITE]: "fill-white",
};
