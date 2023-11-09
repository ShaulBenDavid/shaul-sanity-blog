export enum ContactTypesEnum {
  OTHER = 'other',
  HELP = 'help',
  BUG_REPORT = 'bugReport',
  USER_ISSUE = 'userIssue',
  COLLABORATION = 'collaboration',
}

export type ContactPayloadType = {
  email: string;
  name: string;
  content: string;
  subjectType: ContactTypesEnum;
};

export type ContactResponseType = {
  message: string;
};
