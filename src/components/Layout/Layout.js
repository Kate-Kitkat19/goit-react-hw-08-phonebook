import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Box, Container, useColorModeValue } from '@chakra-ui/react';

export const Layout = () => {
  const bcgImage = useColorModeValue(
    "linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3)), url('https://images.unsplash.com/photo-1529697216570-f48ef8f6b2dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",

    "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80')"
  );

  return (
    <Box
      bgImage={bcgImage}
      bgRepeat="repeat-y"
      w="100vw"
      h="100vh"
      backgroundSize="cover"
      position="fixed"
    >
      <AppBar />

      <Suspense fallback={null}>
        <Container centerContent padding={4}>
          <Outlet />
        </Container>
      </Suspense>
    </Box>
  );
};
