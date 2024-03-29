import React, { Suspense, lazy, useLayoutEffect, useState } from 'react';
import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Loading from '@components/commons/Loading/Loading';

import { useAuthStore } from '@store/auth';

const Home = lazy(() => import('./Home/Home'));
const ATopics = lazy(() => import('./A/ATopics'));
const BTopic = lazy(() => import('./B/BTopic'));
const BTopics = lazy(() => import('./B/BTopics'));
const TopicSideSelection = lazy(() => import('./Topic/TopicSideSelection'));
const TopicCreate = lazy(() => import('./Topic/Create/TopicCreate'));
const MyPage = lazy(() => import('./MyPage/MyPage'));
const ModifyProfile = lazy(() => import('./MyPage/ModifyProfile/ModifyProfile'));
const Notification = lazy(() => import('./Notification/Notification'));
const Login = lazy(() => import('./Auth/login/Login'));
const KakaoLogin = lazy(() => import('./Auth/kakao/KakaoLogin'));
const GoogleLogin = lazy(() => import('./Auth/google/GoogleLogin'));
const Signup = lazy(() => import('./Auth/signup/Signup'));

const AuthRoute = () => {
  const reLogin = useAuthStore((store) => store.reLogin);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const handleReLogin = async () => {
      try {
        await reLogin();
        setIsLoading(false);
      } catch (e) {
        if (e instanceof Error) {
          if (e.message === 'REFRESH_TOKEN_EMPTY') {
            setIsLoading(false);
            console.error(e);
          }
        }
      }
    };

    handleReLogin();
  }, []);

  return <>{isLoading ? <Loading /> : <Outlet />}</>;
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
            <Route path="b/:topicId" element={<BTopic />} />
            <Route path="create" element={<TopicSideSelection />} />
            <Route path="create/:topicSide" element={<TopicCreate />} />
          </Route>
          <Route path="mypage">
            <Route index element={<MyPage />} />
            <Route path="modify-profile" element={<ModifyProfile />} />
          </Route>
          <Route path="notifications" element={<Notification />} />
        </Route>
        <Route path="login">
          <Route index element={<Login />} />
          <Route path="kakao" element={<KakaoLogin />} />
          <Route path="google" element={<GoogleLogin />} />
        </Route>
        <Route path="signup" element={<Signup />} />
      </Route>
    )
  );

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
