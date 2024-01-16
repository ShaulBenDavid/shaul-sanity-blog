import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { stringToAvatar, stringToColor } from "@/src/utils";
import { avatarSizesConfig } from "./Avatar.config";
import { AvatarSizes } from "./Avatar.types";

interface AvatarProps {
  url?: string;
  name: string;
  size?: AvatarSizes;
  className?: string;
}

export const Avatar = ({
  url,
  name,
  size = AvatarSizes.LARGE,
  className,
}: AvatarProps): JSX.Element => (
  <div
    className={twMerge(
      `relative flex items-center justify-center overflow-hidden rounded-full uppercase text-white ${avatarSizesConfig[size]}`,
      className,
    )}
    style={{ backgroundColor: `${url ? "initial" : stringToColor(name)}` }}
    data-testid="avatar-component-test-id"
  >
    {url ? (
      <Image
        src={url as string}
        alt={`Avatar - ${name}`}
        className="dw-skeleton object-cover"
        loading="lazy"
        fill
        sizes="10vh"
      />
    ) : (
      stringToAvatar(name)
    )}
  </div>
);
