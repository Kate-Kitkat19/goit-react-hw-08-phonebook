import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks';

import { Layout } from './Layout/Layout';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';

const RegisterPage = lazy(() => import('./RegisterForm/RegisterForm'));
const LoginPage = lazy(() => import('./LoginForm/LoginForm'));
const HomePage = lazy(() => import('./HomePage/HomePage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isLoggedIn = useAuth();

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          {isLoggedIn ? (
            <Route index element={<HomePage />} />
          ) : (
            <Route index element={<LoginPage />} />
          )}

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<HomePage />} />
            }
          />
        </Route>
      </Routes>
    )
  );
};
