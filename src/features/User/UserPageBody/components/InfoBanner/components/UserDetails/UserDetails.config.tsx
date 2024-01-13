import React from "react";
import { FaBirthdayCake, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { UserDetailsEnum } from "@/src/api/user";
import type { DetailsType } from "@/src/features/User/UserPageBody";

export const userDetailsIconsConfig: Record<DetailsType, JSX.Element> = {
  [UserDetailsEnum.WEBSITE]: <FaExternalLinkAlt size={24} role="img" />,
  [UserDetailsEnum.JOIN_DATE]: <FaBirthdayCake size={24} role="img" />,
  [UserDetailsEnum.GITHUB]: <FaGithub size={24} role="img" />,
  [UserDetailsEnum.LOCATION]: <FaLocationDot size={24} role="img" />,
};
