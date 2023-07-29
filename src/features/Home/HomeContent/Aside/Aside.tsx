import React from 'react';
import TopicsList from '../components/TopicsList';

const Aside = (): JSX.Element => (
  <aside className="w-96 max-lg:w-72 max-md:hidden">
    {/* @ts-expect-error Server Component */}
    <TopicsList />
  </aside>
);

export default Aside;
