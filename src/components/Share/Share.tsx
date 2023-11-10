"use client";

import React from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import { shareContent } from "./Share.config";

interface ShareProps {
  url?: string;
  subject?: string;
  title?: string;
}

const Share = ({ url = "", subject, title }: ShareProps): JSX.Element => {
  return (
    <div className="flex w-full flex-col gap-3">
      <h2 className="text-base font-bold text-wizard-black">
        Share with your friends
      </h2>
      <div
        className="flex flex-wrap gap-2 pl-2"
        data-testid="share-component-test-id"
      >
        <EmailShareButton
          url={`${shareContent.url}${url}`}
          subject={subject ?? shareContent.subject}
          body={title ?? shareContent.title}
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
        <FacebookShareButton
          url={`${shareContent.url}${url}`}
          quote={title ?? shareContent.title}
          hashtag="#dwizard"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <LinkedinShareButton url={`${shareContent.url}${url}`}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <WhatsappShareButton
          url={`${shareContent.url}${url}`}
          title={title ?? shareContent.title}
          separator=":: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <RedditShareButton
          url={`${shareContent.url}${url}`}
          title={title ?? shareContent.title}
        >
          <RedditIcon size={32} round />
        </RedditShareButton>

        <TwitterShareButton
          url={`${shareContent.url}${url}`}
          title={title ?? shareContent.title}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default Share;
