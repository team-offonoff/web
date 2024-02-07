import React from 'react';
import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { useAuthStore } from '@store/auth';

import AlphaTopics from './A/AlphaTopics';
import GoogleLogin from './Auth/google/GoogleLogin';
import KakaoLogin from './Auth/kakao/KakaoLogin';
import Login from './Auth/login/Login';
import Signup from './Auth/signup/Signup';
import Home from './Home/Home';
import Notification from './Notification/Notification';
import TopicCreate from './Topic/Create/TopicCreate';
import TopicSideSelection from './Topic/TopicSideSelection';

const ProtectedRoute = () => {
  const isLoggedIn = useAuthStore((store) => store.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={'/login'} replace />;
  }

  return <Outlet />;
};

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<div>Error...</div>}>
        <Route path="*" element={<ProtectedRoute />}>
          <Route index element={<Home />} />
          <Route path="topics">
            <Route path="a" element={<AlphaTopics />} />
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
