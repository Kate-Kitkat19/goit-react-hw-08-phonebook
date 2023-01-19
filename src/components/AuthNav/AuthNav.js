import { NavLink } from 'react-router-dom';
import { HStack, Button, useColorMode } from '@chakra-ui/react';

export const AuthNav = () => {
  const { colorMode } = useColorMode();

  const buttonColors = {
    darkMode: { bg: 'green.200', color: 'gray.800' },
    lightMode: { bg: 'green.500', color: 'white' },
  };

  return (
    <HStack spacing={4}>
      <Button
        as={NavLink}
        to="/register"
        _activeLink={
          colorMode === 'light' ? buttonColors.lightMode : buttonColors.darkMode
        }
      >
        Register
      </Button>
      <Button
        as={NavLink}
        to="/login"
        _activeLink={
          colorMode === 'light' ? buttonColors.lightMode : buttonColors.darkMode
        }
      >
        Log In
      </Button>
    </HStack>
  );
};
