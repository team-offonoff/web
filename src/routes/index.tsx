import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from '@components/Layout/Layout';

import GoogleLogin from './Auth/google/GoogleLogin';
import KakaoLogin from './Auth/kakao/KakaoLogin';
import Login from './Auth/Login';
import Home from './Home/Home';

const Router = () => {
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  const authorizedRoutes = [
    {
      index: true,
      element: <Home />,
    },
  ];

  const publicRoutes = [
    {
      path: '/',
      element: <Layout />,
      children: [
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
  ];

  const routes = isAuthorized ? authorizedRoutes : publicRoutes;

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default Router;
