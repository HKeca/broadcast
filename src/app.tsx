import React, { FC } from 'react';
import reactDOM from 'react-dom';

const App: FC<{}> = () => (
  <p>hi</p>
);

reactDOM.render(
  <App />,
  document.querySelector('#app')
);