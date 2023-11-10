import type { Base, Block, Image, Slug } from "./common.types";

export interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  username: string;
  title: string;
  slug: Slug;
}
