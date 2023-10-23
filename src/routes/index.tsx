import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from '@components/Layout/Layout';

import Home from './Home/Home';
import Login from './Auth/Login';
import KakaoLogin from './Auth/kakao/KakaoLogin';
import GoogleLogin from './Auth/google/GoogleLogin';

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
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'login/kakao',
          element: <KakaoLogin />,
        },
        {
          path: 'login/google',
          element: <GoogleLogin />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
