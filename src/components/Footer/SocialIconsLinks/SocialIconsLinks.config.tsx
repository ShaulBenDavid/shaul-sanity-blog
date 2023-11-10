import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
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
    <AiOutlineTwitter
      aria-hidden
      fill={theme.secondary[950]}
      width={24}
      height={24}
    />
  ),
};
