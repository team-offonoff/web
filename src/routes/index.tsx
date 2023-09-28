import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import Home from './Home/Home';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
