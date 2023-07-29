import { Author } from './author.types';
import { Base, Block, Image, Slug } from './common.types';
import { Topic } from './topic.types';

export interface Post extends Base {
  author: Author;
  body: Block[];
  topics: Topic[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}
