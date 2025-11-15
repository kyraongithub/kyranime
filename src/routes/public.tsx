import { lazy } from 'react';
import PublicLayout from '../components/layout/PublicLayout';

const Home = lazy(() => import('../components/pages/home'));
const Detail = lazy(() => import('../components/pages/detail'));

export const publicRoutes = {
  path: '/',
  element: <PublicLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: 'detail/:id',
      element: <Detail />,
    },
  ],
};
