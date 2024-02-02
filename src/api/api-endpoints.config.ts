export enum ApiEndpoints {
  // AUTH
  LOGIN = "auth/login/",
  SIGN_UP = "auth/sign-up/",
  LOGOUT = "auth/logout/",
  REFRESH = "auth/refresh/",
  ACTIVATION = "auth/activation/",
  RESET_PASSWORD = "auth/reset-password/",
  NEW_PASSWORD = "auth/new-password/",

  // USER
  USER_INFO = "user/info/",
  USER_IMAGE = "user/image/",
  READING_LIST = "user/reading-list/",
  READING_LIST_ITEM = "user/:id/reading-list/",

  // SERVICES
  CONTACT_US = "services/contact/",
}
