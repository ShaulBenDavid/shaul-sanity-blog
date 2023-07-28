export type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export type Reference = any;

export interface Span {
  _key: string;
  _type: 'block';
  marks: string[];
  text: string;
}

export interface Slug {
  _type: 'slug';
  current: string;
}

export interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface Image {
  _type: 'image';
  asset: Reference;
}

export interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

export interface Topic extends Base {
  description: string;
  title: string;
  slug: Slug;
}

export interface Post extends Base {
  author: Author;
  body: Block[];
  topics: Topic[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

export interface MainImage {
  _type: 'image';
  asset: Reference;
}

export interface Title {
  _type: 'string';
  current: string;
}
