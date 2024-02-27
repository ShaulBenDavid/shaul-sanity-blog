import { WEBSITE_URL } from "@/src/constants";

type ShareContent = {
  url: string;
  subject: string;
  title: string;
};

export const shareContent: ShareContent = {
  url: WEBSITE_URL,
  subject: "Dev Wizard - Tech Blog",
  title: "Welcome to dwizard, your go-to programming blog for developers.",
};
