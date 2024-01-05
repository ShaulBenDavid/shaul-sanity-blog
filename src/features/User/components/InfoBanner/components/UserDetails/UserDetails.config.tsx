import React from "react";
import { FaBirthdayCake, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { UserDetailsEnum } from "@/src/api/user";

export const userDetailsIconsConfig = {
  [UserDetailsEnum.WEBSITE]: <FaExternalLinkAlt />,
  [UserDetailsEnum.JOIN_DATE]: <FaBirthdayCake />,
  [UserDetailsEnum.GITHUB]: <FaGithub />,
  [UserDetailsEnum.LOCATION]: <FaLocationDot />,
};
