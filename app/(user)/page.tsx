import { previewData } from "next/headers";
import groq from "groq";
import { client } from "@/lib/sanity.client";
import PreviewSuspense from "@/components/PreviewSuspense/PreviewSuspense";
import PreviewBlogList from "@/components/PreviewBlogList/PreviewBlogList";
import BlogList from "@/components/BlogList/BlogList";
const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<p>Loading...</p>}>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  return (
    <main>
      <BlogList posts={posts} />
    </main>
  );
}
