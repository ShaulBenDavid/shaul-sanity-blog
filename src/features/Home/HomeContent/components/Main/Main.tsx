import React, { Fragment } from "react";
import { getPosts } from "@/src/sanity/queries/post";
import { ButtonLink, ButtonLinkVariants } from "@/src/components/ButtonLink";
import { forUrl } from "@/src/sanity/sanity.utils";
import { buildRoutePath } from "@/src/utils";
import { Routes } from "@/src/routes";
import { PostPreview } from "@/src/components/Posts/PostPreview";

export const revalidate = 86400; // revalidate build every day

export const Main = async (): Promise<JSX.Element> => {
  const posts = await getPosts();

  return (
    <section className="flex flex-1 flex-col gap-3 pb-2">
      {posts?.map(
        ({
          _id,
          title,
          author,
          mainImage,
          description,
          slug,
          _createdAt,
          estimatedReadingTime,
        }) => (
          <Fragment key={_id}>
            <PostPreview
              title={title}
              content={description}
              imgUrl={forUrl(mainImage).url()}
              author={author}
              href={buildRoutePath(Routes.POST, slug.current)}
              readTime={estimatedReadingTime}
              date={new Date(_createdAt)}
              isBookmarked={false}
            />
            <hr className="border-dw-grey" />
          </Fragment>
        ),
      )}
      <ButtonLink variant={ButtonLinkVariants.SECONDARY} href={Routes.BLOG}>
        See all posts...
      </ButtonLink>
    </section>
  );
};
