import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import Layout from '@components/Layout/Layout';

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
