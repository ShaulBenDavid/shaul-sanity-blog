import React from 'react';
import Aside from './Aside';
import Main from './Main';

const HomeContent = (): JSX.Element => (
  <div className="flex flex-row justify-between gap-32">
    {/* @ts-expect-error Server Component */}
    <Main />
    <Aside />
  </div>
);

export default HomeContent;
