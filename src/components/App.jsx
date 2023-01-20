import React, { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './Layout/Layout';
import { NotFound } from './NotFound/NotFound';
import { RestrictedRoute } from './RestrictedRoute';
import { ChakraProvider, theme, ColorModeProvider } from '@chakra-ui/react';

const RegisterForm = lazy(() => import('./RegisterForm/RegisterForm'));
const LoginPage = lazy(() => import('./LoginForm/LoginForm'));
const HomePage = lazy(() => import('./HomePage/HomePage'));

export const App = () => {
  const { isRefreshing } = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { isLoggedIn } = useAuth();

  return (
    !isRefreshing && (
      <ChakraProvider theme={theme}>
        <ColorModeProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={isLoggedIn ? <HomePage /> : <LoginPage />}
              />

              <Route
                path="register"
                element={
                  <RestrictedRoute
                    redirectTo="/"
                    component={<RegisterForm />}
                  />
                }
              />
              <Route
                path="login"
                element={
                  <RestrictedRoute redirectTo="/" component={<LoginPage />} />
                }
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ColorModeProvider>
      </ChakraProvider>
    )
  );
};
