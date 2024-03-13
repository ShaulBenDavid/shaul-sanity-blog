import { Routes } from "./routes.types";

export const routesTitlesConfig = {
  [Routes.ROOT]: "home",
  [Routes.OUR_STORY]: "our story",
  [Routes.CONTACT_US]: "contact us",
  [Routes.NEWS]: "news",
  [Routes.SIGN_IN]: "sign in",
  [Routes.SIGN_UP]: "sign up",
  [Routes.PRIVACY_POLICY]: "privacy policy",
  [Routes.TERMS_CONDITIONS]: "terms & conditions",
  [Routes.TOPICS]: "topics",
};

export const publicRoutes = [
  Routes.CONTACT_US,
  Routes.NEWS,
  Routes.OUR_STORY,
  Routes.PRIVACY_POLICY,
  Routes.ROOT,
  Routes.TERMS_CONDITIONS,
  Routes.TOPIC,
  Routes.TOPICS,
  Routes.POST,
];

export const visitorRoutes = [
  ...publicRoutes,
  Routes.SIGN_UP,
  Routes.SIGN_IN,
  Routes.RESET_PASSWORD,
];

export const userRoutes = [
  ...publicRoutes,
  Routes.SETTINGS,
  Routes.READING_LIST,
];
