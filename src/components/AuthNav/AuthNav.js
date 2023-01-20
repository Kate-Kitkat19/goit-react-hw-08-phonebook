import { NavLink } from 'react-router-dom';
import { HStack, Button, useColorModeValue } from '@chakra-ui/react';

export const AuthNav = () => {
  const buttonColors = useColorModeValue(
    "bg: 'green.200', color: 'gray.800' ",
    "bg: 'green.500', color: 'white'"
  );

  return (
    <HStack spacing={4}>
      <Button as={NavLink} to="/register" _activeLink={buttonColors}>
        Register
      </Button>
      <Button as={NavLink} to="/login" _activeLink={buttonColors}>
        Log In
      </Button>
    </HStack>
  );
};
