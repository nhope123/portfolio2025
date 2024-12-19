import { createBrowserRouter } from 'react-router';

import Home from './pages/Home/Home.tsx';

const routes = createBrowserRouter([
  {
    element: <Home />,
    index: true,
    path: '/',
  },
], {
  
});

export default routes;
