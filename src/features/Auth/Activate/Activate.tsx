"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useGetActive } from "@/src/api/auth/hooks";
import { EmptyState } from "@/src/components/EmptyState";
import WarningSVG from "@/src/assets/WarningDrawSVG.svg";
import { Routes } from "@/src/routes";
import { ActivateLoader } from "./ActivateLoader";
import { ButtonLink, ButtonLinkVariants } from "@/src/components/ButtonLink";

const TOKEN_QUERY_PARAMS = "token";

export const Activate = (): JSX.Element => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get(TOKEN_QUERY_PARAMS);
  const params = {
    token: token ?? "",
  };

  const handleSuccess = (): void => {
    toast.success("Account verified successfully!, please login.", {
      role: "alert",
      pauseOnFocusLoss: true,
    });
    router.replace(Routes.SIGN_IN);
  };

  const { isGetActiveLoading, isGetActiveError } = useGetActive({
    params,
    handleSuccess,
  });

  return (
    <div className="my-10">
      {isGetActiveLoading && <ActivateLoader />}
      {isGetActiveError && (
        <EmptyState
          svgUrl={WarningSVG}
          header="Fail to verify"
          description="Oops! It looks like the verification via the provided link didn't go through. Please double-check the link or try an alternative method. If the issue persists, reach out to our support team for assistance."
          footer={
            <div className="grid w-80 grid-cols-2 flex-row items-center gap-2">
              <ButtonLink
                href={Routes.CONTACT_US}
                variant={ButtonLinkVariants.LINK}
              >
                Contact Us
              </ButtonLink>
              <ButtonLink
                href={Routes.VERIFY}
                variant={ButtonLinkVariants.PRIMARY}
              >
                Verify Email
              </ButtonLink>
            </div>
          }
        />
      )}
    </div>
  );
};
