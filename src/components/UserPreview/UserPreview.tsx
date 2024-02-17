import React from "react";
import Link from "next/link";
import { Avatar } from "../Avatar";

interface UserPreviewProps {
  name: string;
  title?: string | null;
  imageUrl?: string | null;
  username: string;
}

export const UserPreview = ({
  name,
  title,
  imageUrl,
  username,
}: UserPreviewProps): JSX.Element => (
  <Link
    href={`/@${username}`}
    className="flex flex-row items-center gap-1"
    data-testid="user-preview-component-test-id"
  >
    <Avatar url={imageUrl ?? undefined} name={name} />
    <div className="flex flex-col capitalize">
      <span className="text-sm">{name}</span>
      {title && (
        <span className="text-xs font-medium text-primary-gray">{title}</span>
      )}
    </div>
  </Link>
);
