import React from "react";
import Spinner, { SpinnerSize } from "@/src/components/Spinner";

export const ActivateLoader = (): JSX.Element => (
  <div className="flex flex-col items-center gap-4">
    <Spinner size={SpinnerSize.LARGE} />
    <h2 className="text-center text-xl font-semibold">
      Please wait, until we finish to verify your account...
    </h2>
  </div>
);
