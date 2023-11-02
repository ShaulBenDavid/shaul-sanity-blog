export enum ContactTypesEnum {
  OTHER = 'other',
  HELP = 'help',
  BUG_REPORT = 'bug-report',
  USER_ISSUE = 'user-issue',
  COLLABORATION = 'collaboration',
}

export type ContactPayloadType = {
  email: string;
  to: string;
  name: string;
  subject: string;
  content: string;
  subjectType: ContactTypesEnum;
};

export type ContactResponseType = {
  message: string;
};
