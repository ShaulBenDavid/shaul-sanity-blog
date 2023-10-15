import React from 'react';
import Link from 'next/link';
import Chip from '@/src/components/Chip';
import { Routes } from '@/src/routes';
import { buildRoutePath } from '@/src/utils';
import type { GetTopics } from '@/src/sanity/queries/home';
import { getTopics } from '@/src/sanity/queries/home';

export const revalidate = 86400; // revalidate build every day

const TopicsList = async (): Promise<JSX.Element> => {
  const topics: GetTopics = await getTopics();

  return (
    <div className="flex w-full flex-col gap-3">
      <h2 className="text-base font-bold text-wizard-black">
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
