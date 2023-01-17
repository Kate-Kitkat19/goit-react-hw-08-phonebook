import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Container } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Container centerContent padding={4}>
          <Outlet />
        </Container>
      </Suspense>
    </div>
  );
};
