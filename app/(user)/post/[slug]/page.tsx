import React from 'react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { client } from '@/lib/sanity.client';
import forUrl from '@/lib/urlFor';
import RichTextComponents from '@/src/components/RichTextComponents/RichTextComponents';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 86400; // revalidate build every day

export async function generateStaticParams() {
  const query = groq`
    *[_type=='post']{
        slug
    } 
    `;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((post) => post.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

const Post = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0] {
        ...,
        author->,
        categories[]->
    } 
    `;
  const post: Post = await client.fetch(query, { slug });

  return (
    <article>
      <section>
        <div>
          <div style={{ width: '80px', height: '80px', position: 'relative' }}>
            <Image
              src={forUrl(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
            <div>
              <h3>{post.author.name}</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1>{post.title}</h1>
          <p>
            {new Date(post._createdAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
        <div>
          <h2>{post.description}</h2>
          <div>
            {post.categories.map((category) => (
              <span key={category._id}>{category.title}</span>
            ))}
          </div>
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
};

export default Post;
