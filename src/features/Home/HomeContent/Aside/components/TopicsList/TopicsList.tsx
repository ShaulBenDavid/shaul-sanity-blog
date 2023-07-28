import React from 'react';
import Link from 'next/link';
import groq from 'groq';
import { client } from '@/lib/sanity.client';
import Chip from '@/src/components/Chip';
import { Topic } from '@/src/schemas/types/common';
import { Routes } from '@/src/routes';
import { buildRoutePath } from '@/src/utils';

const query = groq`
  *[_type=='topic'] {
    title,
    slug
   }[0..9]
`;

export const revalidate = 86400; // revalidate build every day

const TopicsList = async (): Promise<JSX.Element> => {
  const topics: Pick<Topic, 'slug' | 'title'>[] = await client.fetch(query);

  return (
    <div className="flex w-full flex-col gap-3">
      <h2 className="text-md font-bold text-wizard-black">
        Discover more by the topics you like
      </h2>
      <div className="flex flex-wrap gap-2 pl-2">
        {topics.map((topic) => (
          <Chip
            key={topic.slug.current}
            name={topic.title}
            href={buildRoutePath(Routes.TOPIC, topic.slug.current)}
          />
        ))}
      </div>
      <p className="text-primary-900 hover:text-secondary-950">
        <Link href={Routes.TOPICS}>Explore more topics</Link>
      </p>
    </div>
  );
};

export default TopicsList;
