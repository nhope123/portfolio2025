import { type RouteObject } from 'react-router';

import Home from './pages/Home/Home.tsx';
import Project from './pages/Project/Project.tsx';

const routes: RouteObject[] = [
  {
    element: <Home />,
    index: true,
    path: '/',
  },
  {
    element: <Project />,
    index: true,
    path: '/projects',
  },
];

export default routes;
