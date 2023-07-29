import React from 'react';
import Share from '@/src/components/Share';
import TopicsList from '../components/TopicsList';

const Aside = (): JSX.Element => (
  <aside className="w-96 max-lg:w-72 max-md:hidden">
    {/* @ts-expect-error Server Component */}
    <TopicsList />
    <Share />
  </aside>
);

export default Aside;
