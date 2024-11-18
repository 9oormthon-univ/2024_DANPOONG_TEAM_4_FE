import { Route, Routes as ReactRouters } from 'react-router-dom';

import RoutesMap from '@routers';

import Layout from './layout';

function App() {
  const elements = RoutesMap.map((item) => (
    <Route key={item.path} path={item.path} element={item.element} />
  ));

  return (
    <ReactRouters>
      <Route path='/' element={<Layout />}>
        {elements}
      </Route>
    </ReactRouters>
  );
}

export default App;
