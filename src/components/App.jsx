import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

import { Layout } from './Layout/Layout';
import { NotFound } from './NotFound/NotFound';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';

const RegisterPage = lazy(() => import('./RegisterForm/RegisterForm'));
const LoginPage = lazy(() => import('./LoginForm/LoginForm'));
const HomePage = lazy(() => import('./HomePage/HomePage'));

export const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isLoggedIn = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={isLoggedIn ? <HomePage /> : <LoginPage />} />

        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="contacts" component={<LoginPage />} />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
