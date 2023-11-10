import type { Author } from "./author.types";
import type { Base, Block, Image, Slug } from "./common.types";
import type { Topic } from "./topic.types";

export interface Post extends Base {
  author: Author;
  body: Block[];
  topics: Topic[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}
