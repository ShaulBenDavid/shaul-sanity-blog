import React from "react";
import { notFound } from "next/navigation";

const AT_SIGN = "%40";

type Props = {
  params: {
    user: string;
  };
};

const Post = ({ params: { user } }: Props) => {
  const username: string | null = user.startsWith(AT_SIGN) ? user : null;

  if (!username) {
    notFound();
  }

  return <article>{user}</article>;
};

export default Post;
