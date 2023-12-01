import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from '@components/Layout/Layout';

import GoogleLogin from './Auth/google/GoogleLogin';
import KakaoLogin from './Auth/kakao/KakaoLogin';
import Login from './Auth/login/Login';
import Signup from './Auth/signup/Signup';
import Home from './Home/Home';

const Router = () => {
  const [isAuthorized, setIsAuthorized] = React.useState(true);

  const authorizedRoutes = [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ];

  const publicRoutes = [
    {
      path: '/',
      children: [
        {
          path: 'signup',
          element: <Signup />,
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
  ];

  const routes = isAuthorized ? authorizedRoutes : publicRoutes;

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default Router;
