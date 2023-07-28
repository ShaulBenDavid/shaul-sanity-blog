import React from 'react';
import TopicsList from './components/TopicsList';

const Aside = (): JSX.Element => (
  <aside className="w-96">
    {/* @ts-expect-error Server Component */}
    <TopicsList />
  </aside>
);

export default Aside;
