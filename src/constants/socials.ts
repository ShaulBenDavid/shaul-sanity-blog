export enum SocialEnum {
  GITHUB = 'github',
  INSTAGRAM = 'instagram',
  TWITTER = 'twitter',
}

export type SocialLinkConfigType = {
  title: SocialEnum;
  link: string;
};

export const socialLinksConfig: SocialLinkConfigType[] = [
  {
    title: SocialEnum.GITHUB,
    link: 'https://github.com/ShaulBenDavid',
  },
  {
    title: SocialEnum.INSTAGRAM,
    link: 'https://www.instagram.com/myproductivedesks/',
  },
  {
    title: SocialEnum.TWITTER,
    link: 'https://twitter.com/shaul_bd',
  },
];
