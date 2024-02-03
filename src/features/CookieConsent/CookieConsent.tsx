"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import ConsentModal, {
  getCookieConsentValue,
  resetCookieConsentValue,
} from "react-cookie-consent";
import { Button, ButtonVariants } from "@/src/components/Button";
import theme from "@/src/styles/tailwind.theme";

export const CookieConsent = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    if (getCookieConsentValue() === "false") {
      resetCookieConsentValue();
    }
  }, []);

  return (
    <ConsentModal
      enableDeclineButton
      style={{
        backgroundColor: theme["bg-grey"],
        color: theme["wizard-black"],
        boxShadow: "0px -11px 53px -14px rgba(45,3,59,0.90)",
        borderRadius: "6px 6px 0 0",
      }}
      onAccept={router.refresh}
      buttonWrapperClasses="flex flex-row gap-3 tb:w-[400px] w-full px-2 pb-2"
      overlay
      ButtonComponent={(
        props: React.ButtonHTMLAttributes<HTMLButtonElement>,
      ) => (
        <Button
          variant={
            props.id === "rcc-decline-button"
              ? ButtonVariants.LINK
              : ButtonVariants.PRIMARY
          }
          {...props}
        />
      )}
    >
      🍪 This website uses cookies to enhance the user experience.
    </ConsentModal>
  );
};
