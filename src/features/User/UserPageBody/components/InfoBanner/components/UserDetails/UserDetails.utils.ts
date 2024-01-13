import { UserDetailsEnum } from "@/src/api/user";
import type { DetailsType } from "@/src/features/User/UserPageBody";

export const getValueFromLink = (type: DetailsType, value: string): string => {
  const mapTypeToLink = {
    [UserDetailsEnum.GITHUB]: value.match(/github\.com\/([^/]+)/),
    [UserDetailsEnum.WEBSITE]: value.match(
      /^(?:https?:\/\/)?(?:www\.)?([^/]+)/,
    ),
    [UserDetailsEnum.JOIN_DATE]: value,
    [UserDetailsEnum.LOCATION]: value,
  };

  return mapTypeToLink[type]?.[1] ?? type;
};
