import React from 'react';
import Aside from './Aside';
import Main from './Main';

// const Main = dynamic(() => import('./Main'), {
//   loading: () => <p>loading..</p>,
// });

const HomeContent = (): JSX.Element => (
  <div>
    {/* @ts-expect-error Server Component */}
    <Main />
    <Aside />
  </div>
);

export default HomeContent;
