import { type RouteObject } from 'react-router';

import About from './pages/About/About.tsx';
import Contact from './pages/Contact/Contact.tsx';
import Home from './pages/Home/Home.tsx';
import Project from './pages/Project/Project.tsx';
import Skills from './pages/Skills/Skills.tsx';

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
  {
    element: <About />,
    index: true,
    path: '/about-me',
  },
  {
    element: <Skills />,
    index: true,
    path: '/skills',
  },
  {
    element: <Contact />,
    index: true,
    path: '/contact',
  },
];

export default routes;
