import React, { useLayoutEffect, useState } from 'react';
import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { useAuthStore } from '@store/auth';

import ATopics from './A/ATopics';
import GoogleLogin from './Auth/google/GoogleLogin';
import KakaoLogin from './Auth/kakao/KakaoLogin';
import Login from './Auth/login/Login';
import Signup from './Auth/signup/Signup';
import BTopics from './B/BTopics';
import Home from './Home/Home';
import Notification from './Notification/Notification';
import TopicCreate from './Topic/Create/TopicCreate';
import TopicSideSelection from './Topic/TopicSideSelection';

const AuthRoute = () => {
  const reLogin = useAuthStore((store) => store.reLogin);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const handleReLogin = async () => {
      try {
        await reLogin();
      } catch (e) {
        console.error(e);
      }
      setIsLoading(false);
    };

    handleReLogin();
  }, []);

  if (isLoading) {
    return <></>;
  }

  return <Outlet />;
};

const ProtectedRoute = () => {
  const isLoggedin = useAuthStore((store) => store.isLoggedIn);

  if (!isLoggedin) {
    return <Navigate to={'/login'} replace />;
  }

  return <Outlet />;
};

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<div>Error...</div>} element={<AuthRoute />}>
        <Route path="*" element={<ProtectedRoute />}>
          <Route index element={<Home />} />
          <Route path="topics">
            <Route path="a" element={<ATopics />} />
            <Route path="b" element={<BTopics />} />
            <Route path="create" element={<TopicSideSelection />} />
            <Route path="create/:topicSide" element={<TopicCreate />} />
          </Route>
          <Route path="notifications" element={<Notification />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="login/kakao" element={<KakaoLogin />} />
        <Route path="login/google" element={<GoogleLogin />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Router;
