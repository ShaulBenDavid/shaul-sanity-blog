import { Base, Slug } from './common.types';

export interface Topic extends Base {
  description: string;
  title: string;
  slug: Slug;
}
