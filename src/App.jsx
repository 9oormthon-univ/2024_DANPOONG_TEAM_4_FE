import { Route, Routes as ReactRouters } from 'react-router-dom';

import Layout from './layout';
import Routes from './routers';

function App() {
  const elements = Routes.map((item) => (
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
