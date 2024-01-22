import React from 'react';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';

import GoogleLogin from './Auth/google/GoogleLogin';
import KakaoLogin from './Auth/kakao/KakaoLogin';
import Login from './Auth/login/Login';
import Signup from './Auth/signup/Signup';
import Home from './Home/Home';
import Notification from './Notification/Notification';
import TopicCreate from './Topic/TopicCreate';

const Router = () => {
  const [isAuthorized, setIsAuthorized] = React.useState(true);

  const authorizedRoutes: RouteObject[] = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'topics/create',
          element: <TopicCreate />,
        },
        {
          path: 'notifications',
          element: <Notification />,
        },
      ],
    },
  ];

  const publicRoutes: RouteObject[] = [
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

  const routes = import.meta.env.DEV
    ? [...authorizedRoutes, ...publicRoutes]
    : isAuthorized
    ? authorizedRoutes
    : publicRoutes;

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default Router;
