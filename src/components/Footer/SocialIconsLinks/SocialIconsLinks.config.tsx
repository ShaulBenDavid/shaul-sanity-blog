import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import theme from "@/src/styles/tailwind.theme";
import { SocialEnum } from "@/src/constants/socials";

export const socialIconsConfig: Record<SocialEnum, JSX.Element> = {
  [SocialEnum.GITHUB]: (
    <AiFillGithub
      aria-hidden
      fill={theme.secondary[950]}
      width={24}
      height={24}
    />
  ),
  [SocialEnum.INSTAGRAM]: (
    <AiFillInstagram
      aria-hidden
      fill={theme.secondary[950]}
      width={24}
      height={24}
    />
  ),
  [SocialEnum.TWITTER]: (
    <FaXTwitter
      aria-hidden
      fill={theme.secondary[950]}
      width={24}
      height={24}
    />
  ),
};
