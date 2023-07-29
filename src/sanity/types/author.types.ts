import { Base, Block, Image, Slug } from './common.types';

export interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}
